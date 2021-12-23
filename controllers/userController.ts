import { Request, Response } from "express";
import User from "../models/User";

class userController {

  static async getUser(req: Request, res: Response) {
    const result = await User.find();
    res.status(200).json(result);
  }

  static async createUser(req: Request, res: Response) {
    const { name, username, email, password } = req.body;
    const result = await User.create({
      name: name,
      username: username,
      email: email,
      password: password,
    });
    res.status(200).json({ message: "Data Berhasil dibuat", data: result });
  }

  static async deleteUser(req: Request, res: Response) {
    const { id } = req.params;
    const result = await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Data berhasil dihapus", data: result });
  }
}

export default userController;