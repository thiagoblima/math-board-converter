/**
 * @author: Thiago Lima
 * @description: map's model object.
 * @module: App { helper }
 */

export class Map<T> {
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
}

// initializing and testing the helpers
const object = new Map();
object.set('username', 'admin');

console.log('Testing Object Class: ', object);
// Testing Object Class:  Map { items: { username: 'admin' } }

//applying an interface to it
interface Images<T> {
    main: string;
    [key:string]: string;
}

const image = new Map();
image.set('height', '29');
image.set('main', './assets/');
image.set('width', '33');

//a return method
function getMainImageUrl(image: Images<String>): string {
    return image.main + image.width;
}

console.log(getMainImageUrl({main:'_id', age:'55'}));
console.log(image);
