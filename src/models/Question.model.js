const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  category: { type: String, require: true },
  type: { type: String, require: true },
  difficulty: { type: String, require: true },
  question: { type: String, require: true },
  correct_answer: { type: String, require: true },
  incorrect_answers: { type: Array, require: true },
});

const QuestionModel = mongoose.model("question", questionSchema);

module.exports = {
  QuestionModel,
};
