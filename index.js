const getInput = require("./modules/getInput");
const Readme = require("./classes/Readme");

const init = async () => {
  const answers = await getInput();
  const readme = new Readme(answers);
  console.log(readme.All);
};

init();
