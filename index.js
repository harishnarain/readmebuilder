const getInput = require("./modules/getInput");
const Readme = require("./classes/Readme");
const createReadme = require("./modules/createReadme");

const init = async () => {
  // Prompt questions and get answers (async)
  const answers = await getInput();

  // Create instance of readme class
  const readme = new Readme(answers);
  console.log(readme.All);

  // Construct README (async)
  await createReadme(readme);

  console.log("README.md is ready!");
};

init();
