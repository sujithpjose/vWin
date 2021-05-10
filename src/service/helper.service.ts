import { Center, CenterResponse } from "../models/centres-model";
import { TelegramBotService } from "./telegram-bot.service";

export class HelperService {
    private telegramBotService: TelegramBotService;
    private totalSlots: number;

    constructor() {
        this.telegramBotService = new TelegramBotService();
        this.totalSlots = 0;
    }

    processResponse(response: CenterResponse) {
        if (response.centers.length > 0) {
            const availableSlots = this.parseResponse(response.centers);
            console.log('availableSlots:', availableSlots);
            if (availableSlots !== this.totalSlots && availableSlots > 0) {
                const htmlString = this.generateTextMessage(availableSlots);
                this.totalSlots = availableSlots;
                this.telegramBotService.sendMessage(htmlString);
            } else {
                // consider as no change
            }

        } else {
            console.log(Date.now, "No Vaccination center is available for booking.");
            // return "No Vaccination center is available for booking.";
            this.telegramBotService.sendMessage("<b>No Vaccination center is available for booking.</b>");
        }
    }

    private parseResponse(data: Center[]): number {
        let totalSlots = 0;
        data.forEach(center => {
            center.sessions.forEach(session => {
                if (session.available_capacity > 0) {
                    totalSlots += session.available_capacity;
                }

            });
        });
        return totalSlots;
    }

    generateTextMessage(slots: number) {
        const msg = `<b>${slots} slots</b> available for booking now. Please visit <b>COWIN</b> portal.
        <i>https://selfregistration.cowin.gov.in/</i>
        `;
        return msg;
    }
}