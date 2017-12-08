/**
 * @name: app.ts
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: Main server entrance.
 * @see: All dependencies and 
 * 
 */

import * as express from "express";
import { Server } from './server';


/**
 * @see: store port value in a
 * variable in to follow the 
 * Server @constructor design.
 * @param: app { express() }
 * @param: port { Number } 
 */


let port = 3412; 
let server = new Server(express(), port);

/**
 * @method: { run } 
 */

server.run();
console.info(`listening on ${port}`);