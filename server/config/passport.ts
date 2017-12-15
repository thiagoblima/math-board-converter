/**
 * @class      : Passport
 * @author     : <thiagolimasp@live.com> Thiago Lima 
 * @module     : App { server }
 * @description: The passport-jwt strategy file.
 * @see        : user model and database file are imported here.
 * 
 */

import User from "../models/user";
import { MongoDB } from "../config/database";

const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongodb = new MongoDB();

export class Passport {
  private opts: {};
  constructor() {}

  public setJWTRequest(): Object {
    return (this.opts = {
      jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
      secretOrKey: mongodb.getSecret()
    });
  }

  public run(passport): void {
    passport.use(
      new JwtStrategy(this.setJWTRequest(), (jwt_payload, done) => {
        User.findOne({ id: jwt_payload.id }, (err, user) => {
          if (err) {
            return done(err, false);
          }
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
      })
    );
  }
}
