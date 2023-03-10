import mongoose from "mongoose";

const gameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  picture: { type: String },
});

export default mongoose.model("Games", gameSchema); // when added to MongoDb is added in plural // games
