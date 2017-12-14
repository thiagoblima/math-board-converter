/**
 * @class      : Server
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: Instances of object Server { aap, port }
 */

import * as express from "express";
import userRouter from "./routes/userRouter";
import requestLogger from "./middleware/requestLogger";
import * as bodyParser from "body-parser";

export class Server {
  /**
   * @param: app - { express application }
   * @param: port - { port to listen on }
   */
  constructor(private app: express.Express, private port: number) {
    this.configureMiddleware(app);
    this.configureRoutes(app);
  }

  private configureMiddleware(app: express.Express) {
    app.use(requestLogger);
  }

  private configureRoutes(app: express.Express) {
    app.use("/api", userRouter.setUserApis());
    app.post("/signup", userRouter.newUser());
    app.get("/users", userRouter.getAllUsers());
    app.put("/user/:id", userRouter.updateUser());
    app.get("/user/:id", userRouter.getUserById());
    app.delete("/user/:id", userRouter.deleteUserById());
    app.post("/authenticate", userRouter.authenticateUser());
  }

  /**
   * @param: run the app - express application
   */

  public run() {
    this.app.listen(this.port);
    this.app.use(express.static(__dirname + "/build"));
  }
}
