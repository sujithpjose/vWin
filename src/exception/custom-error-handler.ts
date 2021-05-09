import { ResponseError } from '../models/response-error';

export class CustomErrorHandler extends Error {
    status: number;
    error: ResponseError;

    constructor(error: ResponseError, status: number = 500) {
        super();
        this.error = error;
        this.status = status;
    }
}