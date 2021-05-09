const axios = require('axios');
import { ResponseError } from '../models/response-error';
import { CustomErrorHandler } from '../exception/custom-error-handler';

export class RequestService {

    constructor() { }

    public get(url: string): Promise<any> {
        return axios.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (iPad; CPU OS 11_0 like Mac OS X) AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1' } })
            .then((response: any) => this.processResponse(response))
            .catch((err: any) => this.handleError(err));
    }

    private processResponse(response: any): any {
        if (response.statusText === 'OK') {
            // res.status >= 200 && res.status < 300
            return response.data;
        } else {
            this.handleError();
        }
    }

    private handleError(err?: Error): ResponseError {
        console.log('In [handleError] ', err);
        const error = new ResponseError(0, 'remote server error');
        throw new CustomErrorHandler(error, 404);
    }

}