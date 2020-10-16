const { prompt } = require("inquirer");
const fs = require("fs").promises;

const getInput = async () => {
  // read questions.json file
  const questionsRaw = await fs
    .readFile("questions.json", "utf-8")
    .then((data) => data)
    .catch((err) => {
      console.error("[Error reading file]:", err);
    });

  const questions = JSON.parse(questionsRaw);

  // iterate through each question and get input
  if (questions) {
    return await prompt(questions)
      .then((ans) => ans)
      .catch((err) => {
        console.error("[Error reading input]:", err);
      });
  }
};

module.exports = getInput;
