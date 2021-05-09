import { NextFunction, Request, Response } from 'express';
import { CustomErrorHandler } from '../exception/custom-error-handler';

function errorMiddleware(customError: CustomErrorHandler, request: Request, response: Response, next: NextFunction) {
    // console.log('In [errorMiddleware]');
    customError.status = customError.status || 500;
    customError.error = customError.error || 'unknown';
    response
        .status(customError.status)
        .send(customError.error);

    next();
}

export default errorMiddleware;