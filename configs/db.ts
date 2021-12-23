import mongoose from "mongoose";

class mongoDB {
  constructor() {}
  public static connect = async () => {
    try {
      const dbName = `BEvoy`;
      const dbUri = `mongodb://localhost:27017/${dbName}`;
      await mongoose.connect(`${dbUri}`);
      console.log("DB Connected");
    } catch (error) {
      console.log(error);
    }
  };
}

export default mongoDB;
