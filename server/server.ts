/**
 * @class: Server
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: The main nodejs server is going to be
 * organized into controllers.
 * @see: More detailed info can be found on README.md
 * as well as on controllers' folder.
 */

import * as express from "express";
import userRouter from "./routes/userRouter";
import requestLogger from "./middleware/requestLogger";

export class Server {
  /**
   * @param app - { express application }
   * @param port - { port to listen on }
   */
  constructor(private app: express.Express, private port: number) {
    this.configureMiddleware(app);
    this.configureRoutes(app);
  }

  private configureMiddleware(app: express.Express) {
    app.use(requestLogger);
  }

  private configureRoutes(app: express.Express) {
    app.get("/user", userRouter);
    app.get("/users", userRouter);
    app.post("/signup", userRouter);
  }

  /**
   * @param run the app - express application
   */

  public run() {
    this.app.listen(this.port);
    this.app.use(express.static(__dirname + "/build"));
  }
}
