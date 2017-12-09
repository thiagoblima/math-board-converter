/**
 * @name: userRouter
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all the user endpoints
 * should be here, then called on main server.
 */

import * as express from "express";
import User from "../models/userModel";

const userRouter = express.Router();

userRouter.get(
  "/user",
  (request: express.Request, response: express.Response) => {
    let seedData = {
      id: 1,
      firstName: "thiago",
      lastName: "lima"
    };

    response.send(seedData);
  }
);

userRouter.get(
  "/users",
  (request: express.Request, response: express.Response) => {
    // A simple GET request method to grab user in the database
    User.find((err, user) => {
      if (err) throw err;

      if (!user) {
        return response.status(401).send({
          success: false,
          msg: "Authentication failed. User not found."
        });
      } else {
        response.status(200).json(user);
      }
    });
  }
);

// add more route handlers here
// e.g. userRouter.post('/', (req,res,next) => {/*...*/})

export default userRouter;
