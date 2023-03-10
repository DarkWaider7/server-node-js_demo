import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const connectionString =
  "mongodb+srv://ordi:mongosh333@cluster0.kxubjrb.mongodb.net/?retryWrites=true&w=majority";

const options = {
  useNewUrlParser: true,
};

function dbConnection() {
  mongoose
    .connect(connectionString, options)
    .then(() => console.log("Mongo connection successfully"))
    .catch((err) => console.log(err));
}

export default dbConnection;
