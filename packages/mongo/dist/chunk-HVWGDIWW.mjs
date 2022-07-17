// src/db/interfaces/mongoose.gen.ts
import mongoose from "mongoose";
function IsPopulated(doc) {
  return doc instanceof mongoose.Document;
}

export {
  IsPopulated
};
