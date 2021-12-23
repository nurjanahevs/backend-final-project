import express, { Application, Request, Response } from "express";
import cors from "cors";
import mongoDB from "./configs/db";
import User from "./models/User";
import routes from "./routers/routes";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugin();
    this.route();
  }

  protected plugin = () => {
    mongoDB.connect();
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  };

  protected route = () => {
    this.app.get("/", (req: Request, res: Response) => {
      res.status(200).json({ message: "Ok" });
    });
    this.app.use('/api', routes);
  };
}

const app = new App().app;
const port = process.env.port || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
