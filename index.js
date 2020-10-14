const Content = require("./classes/Content");
const getInput = require("./modules/getInput");

const init = async () => {
  const answers = await getInput();
  console.log(answers);
};

init();
