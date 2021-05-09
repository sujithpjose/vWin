import { CenterResponse } from "../models/centres-model";
import { TelegramBotService } from "./telegram-bot.service";

export class HelperService {
    private telegramBotService: TelegramBotService;

    constructor() {
        this.telegramBotService = new TelegramBotService();
    }

    processResponse(response: CenterResponse) {
        if (response.centers.length > 0) {
            const msg = "Vaccination center is available for booking.";
            this.telegramBotService.sendMessage(msg);
        } else {
            return "No Vaccination center is available for booking.";
        }
    }
}