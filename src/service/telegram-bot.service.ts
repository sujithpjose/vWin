import { APP_CONSTANTS } from './../constants/app.constants';
import TelegramBot from 'node-telegram-bot-api';

export class TelegramBotService {

    private token: string;
    private chatId: string;
    private bot: TelegramBot;

    constructor() {
        this.token = APP_CONSTANTS.TELEGRAM_TOKEN;
        this.chatId = APP_CONSTANTS.TELEGRAM_CHANNEL_ID;
        this.bot = new TelegramBot(this.token, { polling: false });
    }

    sendMessage(msg: string) {
        this.bot.sendMessage(this.chatId, msg, { parse_mode: 'HTML' });
    }

}