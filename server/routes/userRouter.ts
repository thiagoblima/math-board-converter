/**
 * @name: userRouter 
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all the user endpoints
 * should be here, then called on main server.
 */

import * as express from "express";

const userRouter = express.Router();

userRouter.get("/user", (request: express.Request, response: express.Response) => {
    
    let seedData = {
      id: 1,
      firstName: "thiago",
      lastName: "lima"
    };

    response.send(seedData);
  }
);

// add more route handlers here
// e.g. userRouter.post('/', (req,res,next) => {/*...*/})

export default userRouter;
