/**
 * @class      : MongoDB
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @module     : App { server }
 * @description: This class receives instances of objects
 * for database and JWT secret.
 * 
 */

export class MongoDB {
  private db: string;
  private secret: string;
  constructor() {
    this.db = "mongodb://'heroku_xz9ldbph':'mathdb01'@ds233228.mlab.com:33228/heroku_xz9ldbph";
    this.secret = "myjwtsecretkey";
  }

  public getDatabase(): string {
    return this.db;
  }

  public getSecret(): string {
    return this.secret;
  }
}
