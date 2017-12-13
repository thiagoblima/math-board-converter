/**
 * @name: requestLogger
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: Middleware responsible for logging
 * REST API requests.
 */

import * as express from "express";

const requestLogger: express.RequestHandler = (
    request: express.Request,
    response: express.Response,
    next: express.NextFunction
) => {
    console.info(`${(new Date()).toUTCString()}|${request.method}|${request.url}|${response.statusCode}`);
    next();
}

export default requestLogger;
