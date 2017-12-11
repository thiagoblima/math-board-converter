/**
 * @name: userRouter
 * @author: <thiagolimasp@live.com> Thiago Lima
 * @description: User REST API, all the user endpoints
 * should be here, then called on main server.
 */

import * as express from "express";
import * as bodyParser from "body-parser";
import User from "../models/userModel";

const userRouter = express.Router();

userRouter.use(bodyParser.urlencoded({ extended: false }));
userRouter.use(bodyParser.json());

userRouter.get("/user", (req: express.Request, res: express.Response) => {
  let seedData = {
    id: 1,
    firstName: "thiago",
    lastName: "lima"
  };

  res.send(seedData);
});

userRouter.get("/users", (req: express.Request, res: express.Response) => {
  // A simple GET request method to grab user in the database
  const promise: Promise<{}> = User.find({});

  promise.then(user => res.status(200).json(user)).catch(err =>
    res.status(401).send({
      success: false,
      msg: "Authentication failed. User not found.",
      error: err
    })
  );
});

userRouter.post("/signup", (req: express.Request, res: express.Response) => {
  if (!req.body.username || !req.body.password) {
    res
      .status(400)
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

    const promise: any = newUser.save();

    // save the user
    promise
      .then(user =>
        res
          .status(200)
          .json({ success: true, msg: "Successful created new user.", user })
      )
      .catch(err =>
        res
          .status(401)
          .json({ success: false, msg: "The user already exists.", err })
      );
  }
});

// add more route handlers here
// e.g. userRouter.post('/', (req,res,next) => {/*...*/})

export default userRouter;
