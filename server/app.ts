/**
 * @name: app.ts
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: Main server entrance. 
 */

import * as express from "express";
import { Server } from './server';


/**
 * @see: store port value in a
 * variable for following the 
 * Server @constructor design.
 * @param: app { express() }
 * @param: port { Number } 
 */


const port = 3412; 
const server = new Server(express(), port);

/**
 * @method: { run } 
 */

server.run();
console.info(`listening on ${port}`);