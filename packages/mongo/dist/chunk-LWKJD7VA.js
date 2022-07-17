"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/db/models/Player.ts
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
var _mongoosesluggerplugin = require('mongoose-slugger-plugin');
var Player2Schema = new _mongoose2.default.Schema({
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
Player2Schema.plugin(_mongoosesluggerplugin.plugin, new (0, _mongoosesluggerplugin.SluggerOptions)({
  slugPath: "slug",
  generateFrom: ["name.full"],
  index: "slug"
}));
var Player = _mongoosesluggerplugin.wrap.call(void 0, _mongoose2.default.model("Player2", Player2Schema));



exports.Player = Player;
