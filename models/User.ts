import { model, Model, Schema } from "mongoose";
import IUsers from "../interfaces/IUser";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "User",
  },
  fullname: {
    type: String,
    default: null,
  },
});

const User: Model<IUsers> = model<IUsers>("user", userSchema);

export default User;
