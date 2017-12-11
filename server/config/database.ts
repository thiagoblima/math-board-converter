/**
 * @class: MongoDB
 * @author: Thiago Lima <thiagolimasp@live.com>
 * @description: This class receives instances of objects
 * for database and JWT secret.
 * @module: App { server }
 */

export class MongoDB {
  private db: string;
  private secret: string;
  constructor() {
    this.db = "mongodb://localhost/math";
    this.secret = 'myjwtsecretkey';
  }

  public getDatabase() {
    return this.db;
  }

  public getSecret() {
      return this.secret;
  }
}
