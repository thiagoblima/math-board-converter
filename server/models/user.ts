/**
 * @author: Thiago Lima
 * @description: user's model object.
 * @module: App { server }
 */

import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";

const Schema = mongoose.Schema;

// user model settings
const UserSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    firstname: {
        type: String,
        required: true,

    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    file: {
        type: String,
        required: true
    }, 
    path: {
        type: String,
        required: true,
        trim: true
    },
});

UserSchema.pre('save', function (next) {
    let user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

export default mongoose.model('User', UserSchema);


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
}

const object = new Map();
object.set('username', 'admin');

console.log('Testing Object Class: ', object);
// Testing Object Class:  Map { items: { username: 'admin' } }

interface Images {
    main: string;
    [key:string]: string;
}

const image = new Map();
image.set('height', '29');
image.set('main', './assets/');
image.set('width', '33');

function getMainImageUrl(image: Images): string {
    return image.main + image.width;
}

console.log(getMainImageUrl({main:'_id', age:'55'}));
console.log(image);

