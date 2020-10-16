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

  // Append title
  await appendContent(readme.Title);

  // Append license badge
  await appendContent(readme.Badge);

  // Append description
  await appendContent(readme.Description);

  // Append table of contents
  await appendContent(readme.TableOfContents);

  // Append installation instructions
  await appendContent(readme.Installation);

  // Append usage
  await appendContent(readme.Usage);

  // Append license info
  await appendContent(readme.License);

  // Append contributing info
  await appendContent(readme.Contributing);

  // Append testing info
  await appendContent(readme.Testing);

  // Append correspondence info with github id and email
  await appendContent(readme.Correspondence);
};

module.exports = createReadme;
