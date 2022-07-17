"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/db/interfaces/mongoose.gen.ts
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);
function IsPopulated(doc) {
  return doc instanceof _mongoose2.default.Document;
}



exports.IsPopulated = IsPopulated;
