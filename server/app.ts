/**
 * @name       : app.ts
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Main server entrance. 
 */

import { MongoDB } from "./config/database";
import * as express from "express";
import mongoose = require('mongoose');
import { Server } from './server'; 


/**
 * Initing a server at port
 * @param: app { express() }
 * @param: port { Number } 
 */


const port = 3412; 
const server = new Server(express(), port);

/**
 * @method     : { server.run() } 
 * @description: connect database and run
 */

const mongodb = new MongoDB();

mongoose.Promise = global.Promise;
const promise = mongoose.connect(mongodb.getDatabase(), { useMongoClient: true });
promise.then().catch(err => err);

server.run();
console.info(`listening on ${port}`);
