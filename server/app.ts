/**
 * @name: app.ts
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: Main server entrance. 
 */

import * as express from "express";
import * as mongoose from "mongoose";
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
 * @description: connect database and run
 * @method: { run } 
 */

mongoose.connect('mongodb://localhost/math', {useMongoClient: true});

server.run();
console.info(`listening on ${port}`);