import { Center, CenterResponse } from "../models/centres-model";
import { TelegramBotService } from "./telegram-bot.service";

export class HelperService {
    private telegramBotService: TelegramBotService;

    constructor() {
        this.telegramBotService = new TelegramBotService();
    }

    processResponse(response: CenterResponse) {
        if (response.centers.length > 0) {
            const msg = "Vaccination center is available for booking. Please visit COWIN portal.";
            const htmlString = this.generateTable(response.centers);
            this.telegramBotService.sendMessage(htmlString);
        } else {
            console.log(Date.now, "No Vaccination center is available for booking.");
            // return "No Vaccination center is available for booking.";
            this.telegramBotService.sendMessage("<b>No Vaccination center is available for booking.</b>");
        }
    }

    generateTable(data: Center[]) {
        let messageString: string = '';

        data.forEach(center => {
            messageString += `
            <b>${center.name} (${center.fee_type})</b> 
            ${center.address}
          `;

            center.sessions.forEach(session => {
                messageString += `
            <b>${session.date}</b>
            Available : ${session.available_capacity}  Age ${session.min_age_limit}+
            <em>${session.vaccine}</em>
            `
            });
        });

        return messageString;

    }
}