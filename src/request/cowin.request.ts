import { CenterResponse } from '../models/centres-model';
import { RequestService } from './request.service';

const baseUrl = 'https://cdn-api.co-vin.in/api/v2';
const DIST_THRISSUR = 303;
export class CowinRequest {
    private requestService: RequestService;

    constructor() {
        this.requestService = new RequestService();
    }

    public fetchByDistrict(districtId = 303): Promise<CenterResponse> {
        const date = this.currentDateAsString();
        const url = `${baseUrl}/appointment/sessions/public/calendarByDistrict?district_id=${districtId}&date=${date}`;

        return this.requestService.get(url);
    }

    private currentDateAsString(): string {
        const dateObj = new Date();
        const month = dateObj.getMonth() + 1;
        const day = String(dateObj.getDate()).padStart(2, '0');
        const year = dateObj.getFullYear();

        return `${day}-${month}-${year}`;
    }
}
