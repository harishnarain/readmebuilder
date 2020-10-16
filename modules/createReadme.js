//const Readme = require("../classes/Readme");
const fs = require("fs").promises;

const displayError = (err) => {
  console.error("An error has occured with error:", err);
};

const createFile = async () => {
  try {
    await fs.writeFile("README.md", "", "utf8");
  } catch (err) {
    displayError(err);
  }
};

const appendContent = async (content) => {
  try {
    await fs.appendFile("README.md", content, "utf8");
  } catch (err) {
    displayError(err);
  }
};

const createReadme = async (readme) => {
  // create README file
  await createFile();

  // append content for each section
  readme.Sections.forEach(async (section) => {
    await appendContent(readme[section]);
  });
};

module.exports = createReadme;
