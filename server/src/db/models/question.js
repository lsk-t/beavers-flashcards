'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Question extends Model {
    static associate(models) {

    }
  }
  Question.init({
    theme: DataTypes.STRING,
    question: DataTypes.STRING,
    answer1: DataTypes.STRING,
    answer2: DataTypes.STRING,
    answer3: DataTypes.STRING,
    correctAnswer: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Question',
  });
  return Question;
};