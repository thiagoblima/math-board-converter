/**
 * @name       : userRouter
 * @author     : <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all user auth endpoints.
 */

import * as express from "express";
import * as bodyParser from "body-parser";
import * as jwt from "jwt-simple";
import { MongoDB } from "../config/database";
import { Passport } from "../config/passport";
import User from "../models/user";
import passport = require("passport");

const pass = new Passport();
const userRouter = express.Router();

userRouter.use(bodyParser.urlencoded({ extended: true }));
userRouter.use(bodyParser.json());
userRouter.use(passport.initialize());
pass.run(passport);

/**
 * @prop       : authorization
 * @param      : headers
 * @method     : getToken()
 * @description: getting headers for JWT token
 */

const getToken = headers => {
  if (headers && headers.authorization) {
    let parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

/**
 * Authenticate and retrieves a JWT access token
 * @param {Object} req HTTP request object.
 * @param {Object} res HTTP response object.
 */

userRouter.post(
  "/authenticate",
  (req: express.Request, res: express.Response) => {
    const mongodb = new MongoDB();
    const queryDocument: Object = { username: req.body.username };
    const promise: Promise<{}> = User.findOne(queryDocument);
    promise
      .then(user => {
        if (!user) {
          res.status(401).json({
            success: false,
            msg: "Authentication failed. User not found."
          });
        } else {
          user["comparePassword"](req.body.password, (err, isMatch) => {
            if (isMatch && !err) {
              let token = jwt.encode(user, mongodb.getSecret());
              res.status(200).json({ success: true, token: "JWT " + token });
            } else {
              res.status(401).send({
                success: false,
                msg: "Authentication failed. Wrong password."
              });
            }
          });
        }
      })
      .catch(err => res.status(422).json(err));
  }
);

/**
 * GET and retrieves users, token required
 * @param {Object} req HTTP request object.
 * @param {Object} res HTTP response object.
 */

userRouter.get(
  "/users",
  passport.authenticate("jwt", { session: false }),
  (req: express.Request, res: express.Response) => {
    // A simple GET request method to grab user in the database
    const mongodb = new MongoDB();
    const token = getToken(req.headers);
    if (token) {
      let decoded = jwt.decode(token, mongodb.getSecret());
      const promise: Promise<{}> = User.find({});

      promise.then(user => res.status(200).json(user)).catch(err =>
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found.",
          error: err
        })
      );
    } else {
      res.status(401).send({ success: false, msg: "No token provided." });
    }
  }
);

/**
 * GET and retrieves a user, token required
 * @param {Object} req HTTP request object.
 * @param {Object} res HTTP response object.
 */

userRouter.get(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  (req: express.Request, res: express.Response) => {
    const mongodb = new MongoDB();
    const token = getToken(req.headers);
    if (token) {
      let decoded = jwt.decode(token, mongodb.getSecret());
      const promise: Promise<{}> = User.findById(req.params.id, {});

      promise.then(user => res.status(200).json(user)).catch(err =>
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found.",
          error: err
        })
      );
    } else {
      res.status(401).send({ success: false, msg: "No token provided." });
    }
  }
);

/**
 * DELETE a specific user, token required
 * @param {Object} req HTTP request object.
 * @param {Object} res HTTP response object.
 */

userRouter.delete(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  (req: express.Request, res: express.Response) => {
    const mongodb = new MongoDB();
    const token = getToken(req.headers);
    if (token) {
      let decoded = jwt.decode(token, mongodb.getSecret());
      const promise: Promise<{}> = User.findByIdAndRemove(req.params.id, {});

      promise.then(user => res.status(200).json(user)).catch(err =>
        res.status(401).send({
          success: false,
          msg: "Authentication failed. User not found.",
          error: err
        })
      );
    } else {
      res.status(401).send({ success: false, msg: "No token provided." });
    }
  }
);

/**
 * POST a new user, no auth required
 * @param {Object} req HTTP request object.
 * @param {Object} res HTTP response object.
 */

userRouter.post("/signup", (req: express.Request, res: express.Response) => {
  const mongodb = new MongoDB();
  if (!req.body.username || !req.body.password) {
    res
      .status(422)
      .json({ success: false, msg: "Please fill out the complete form." });
  } else {
    let newUser: any = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      age: req.body.age,
      file: req.body.file,
      path: req.body.path
    });

    const promise: Promise<{}> = newUser.save();

    // save the user
    promise
      .then(user =>
        res
          .status(200)
          .json({ success: true, msg: "Successful created new user.", user })
      )
      .catch(err =>
        res
          .status(422)
          .json({ success: false, msg: "The user already exists.", err })
      );
  }
});

/**
 * PUT a specific user, token required
 * @param {Object} req HTTP request object.
 * @param {Object} res HTTP response object.
 */

userRouter.put(
  "/user/:id",
  passport.authenticate("jwt", { session: false }),
  (req: express.Request, res: express.Response) => {
    const mongodb = new MongoDB();
    const token = getToken(req.headers);
    if (token) {
      let decoded = jwt.decode(token, mongodb.getSecret());
      // find user by id and update it
      const promise: Promise<{}> = User.findByIdAndUpdate(req.params.id, {
        _id: req.params.id,
        file: req.body.file,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        age: req.body.age
      });

      promise
        .then(user =>
          res
            .status(200)
            .json({ success: true, msg: "Successful updated the user.", user })
        )
        .catch(err =>
          res
            .status(422)
            .json({ success: false, msg: "Error on updating the user.", err })
        );
    } else {
      res.status(401).send({
        success: false,
        msg: "No token provided."
      });
    }
  }
);

// add more route handlers here
// e.g. userRouter.post('/', (req,res,next) => {/*...*/})

export default userRouter;
