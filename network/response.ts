import {Request, Response} from 'express';

export function success(req: Request, res: Response, message: string, status: number): void {

    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(status).json({
        error: false,
        success: statusCode,
        message: statusMessage
    });

};

export function error(req: Request, res: Response, message: string, status: number): void {

    let statusCode = status || 500;
    let statusMessage = message || 'Internal Server Error';

    res.status(status).json({
        error: true,
        success: statusCode,
        message: statusMessage
    });

};
