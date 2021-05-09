import { CenterResponse } from '../models/centres-model';
import { RequestService } from './request.service';

const baseUrl = 'https://cdn-api.co-vin.in/api/v2';
const DIST_THRISSUR = 303;
export class CowinRequest {
    private requestService: RequestService;

    constructor() {
        this.requestService = new RequestService();
    }

    public fetchByDistrict(districtId = 555, date = "09-05-2021"): Promise<CenterResponse> {
        const url = `${baseUrl}/appointment/sessions/public/calendarByDistrict?district_id=${DIST_THRISSUR}&date=${date}`;

        return this.requestService.get(url);
    }
}
