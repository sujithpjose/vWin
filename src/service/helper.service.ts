import { Center, CenterResponse } from "../models/centres-model";
import { TelegramBotService } from "./telegram-bot.service";

export class HelperService {
    private telegramBotService: TelegramBotService;
    private totalSlots: TotalSlots;

    constructor() {
        this.telegramBotService = new TelegramBotService();
        this.totalSlots = {
            a45: 0,
            u45: 0
        };
    }

    processResponse(response: CenterResponse) {
        if (response.centers.length > 0) {
            const availableSlots: TotalSlots = this.parseResponse(response.centers);
            console.log('Total availableSlots:', availableSlots);

            if (availableSlots.a45 !== this.totalSlots.a45 || availableSlots.u45 !== this.totalSlots.u45) {
                const htmlString = this.generateTextMessage(availableSlots);
                this.totalSlots = { ...availableSlots };
                this.telegramBotService.sendMessage(htmlString);
            } else {
                console.log(Date.now, "consider as no change.");
                // consider as no change
            }

        } else {
            console.log(Date.now, "No Vaccination center is available for booking now.");
            // return "No Vaccination center is available for booking.";
            // this.telegramBotService.sendMessage("<b>No Vaccination center is available for booking now!.</b>");
        }
    }

    private parseResponse(data: Center[]): TotalSlots {
        let totalSlots: TotalSlots = {
            a45: 0,
            u45: 0
        };
        data.forEach(center => {
            center.sessions.forEach(session => {
                if (session.available_capacity > 0 && session.min_age_limit === 45) {
                    totalSlots.a45 += session.available_capacity;
                } else if (session.available_capacity > 0 && session.min_age_limit < 45) {
                    totalSlots.u45 += session.available_capacity;
                }

            });
        });
        return totalSlots;
    }

    generateTextMessage(slots: TotalSlots) {
        const msg = `<i> Age 45+ :</i><b> ${slots.a45} slots </b> & <i>Age 18+ :</i><b> ${slots.u45} slots </b>available for booking now. Please visit <b>COWIN</b> portal.
        <i>https://selfregistration.cowin.gov.in/</i>
        `;
        return msg;
    }
}

interface TotalSlots {
    a45: number,
    u45: number
}