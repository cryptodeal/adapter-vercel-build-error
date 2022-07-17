// src/db/models/Player.ts
import mongoose from "mongoose";
import { wrap, plugin, SluggerOptions } from "mongoose-slugger-plugin";
var Player2Schema = new mongoose.Schema({
  slug: { type: String, required: true },
  name: {
    full: { type: String, required: true },
    display: { type: String },
    pronunciation: { type: String },
    nicknames: [{ type: String }],
    parsed: [{ type: String }]
  },
  birthDate: { type: Date },
  birthPlace: {
    city: { type: String },
    state: { type: String },
    country: { type: String }
  },
  highSchool: { type: String },
  college: { type: String },
  socials: {
    twitter: { type: String },
    instagram: { type: String }
  },
  height: {
    feet: { type: Number },
    inches: { type: Number }
  },
  weight: { type: Number },
  lastAffiliation: { type: String },
  position: { type: String },
  shoots: { type: String },
  draftYear: { type: String },
  draftRound: { type: String },
  draftNumber: { type: String },
  seasons: [
    {
      year: { type: Number, required: true, index: true }
    }
  ]
});
Player2Schema.index({ "slug": 1 }, { name: "slug", unique: true });
Player2Schema.plugin(plugin, new SluggerOptions({
  slugPath: "slug",
  generateFrom: ["name.full"],
  index: "slug"
}));
var Player = wrap(mongoose.model("Player2", Player2Schema));

export {
  Player
};
