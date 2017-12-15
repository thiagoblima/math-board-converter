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
    this.db = "mongodb://localhost/math";
    this.secret = "myjwtsecretkey";
  }

  public getDatabase(): string {
    return this.db;
  }

  public getSecret(): string {
    return this.secret;
  }
}
