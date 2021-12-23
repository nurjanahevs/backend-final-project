import { Request, Response, Router } from "express";
import User from "../models/User";
import users from "../controllers/userController";

class Routes {
  router: Router;
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes = () => {
    this.router.get("/users", users.getUser);
    this.router.post("/create", users.createUser);
    this.router.delete("/delete/:id", users.deleteUser);
  };
}

export default new Routes().router;

