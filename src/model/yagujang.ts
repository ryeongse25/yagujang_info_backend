import mongoose from "mongoose";

const yagujangSchema = new mongoose.Schema({
  city: String,
  name: String,
  home: String,
  address: String,
});

export default mongoose.model("Yagujang", yagujangSchema, "yagujang");
