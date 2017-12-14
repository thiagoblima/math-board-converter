/**
 * @module     : Object
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: map's model object.
 */

interface ObjectModel<T> {
  main: string;
  [key: string]: string;
}

class Map<T> {
  private items: { [key: string]: T };

  public constructor() {
    this.items = Object.create(null);
  }

  public set(key: string, value: T): void {
    this.items[key] = value;
  }

  public get(key: string): T {
    return this.items[key];
  }

  public remove(key: string): T {
    let value = this.get(key);
    delete this.items[key];
    return value;
  }

  public objectRun(items: ObjectModel<String>): string {
    return items.main + items.command;
  }
}

// initializing and testing the helpers
const object = new Map();
object.set("username", "admin");
object.set("checked", true);

const image = new Map();
image.set("height", "29");
image.set("main", "./assets/");
image.set("width", 39);

// logging out
console.log(object); // Testing Object Class:  Map { items: { username: 'admin' } }
console.log(image);
console.log(image.objectRun({ main: "grunt ", ["command"]: "clean" }));
