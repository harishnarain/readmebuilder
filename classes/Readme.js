class Readme {
  // Constructor
  constructor(ans) {
    (this.title = ans.title),
      (this.description = ans.description),
      (this.installation = ans.installation),
      (this.usage = ans.usage),
      (this.license = ans.license),
      (this.contributing = ans.contributing),
      (this.testing = ans.testing),
      (this.questions = ans.questions),
      (this.githubId = ans.githubId),
      (this.email = ans.email);
  }

  // Getters
  get Title() {
    return this.getTitle();
  }

  get Description() {
    return this.getTextContent(this.description);
  }

  get Installation() {
    return this.getSection("Installation", this.installation);
  }

  get Usage() {
    return this.getSection("Usage", this.usage);
  }

  get License() {
    return this.getLicense("License", this.license);
  }

  get Contributing() {
    return this.getSection("Contributing", this.contributing);
  }

  get Testing() {
    return this.getSection("Testing", this.testing);
  }

  get Correspondence() {
    return this.getCorrespondence("Questions", this.githubId, this.email);
  }

  get TableOfContents() {
    return this.getTableOfContents();
  }

  get Badge() {
    return this.getBadge(this.license);
  }

  // Methods
  getTitle = () => {
    return "# " + this.title + "\n";
  };

  getTextContent = (content) => {
    return content;
  };

  getSection = (header, content) => {
    return `## ${header}\n` + content + "\n";
  };

  getLicense = (header, licenseType) => {
    const licenseIntro = "This project uses ";
    let licenseText = "";
    switch (licenseType) {
      case "apache-2.0":
        licenseText = licenseIntro + "the Apache 2.0" + " license";
        break;
      case "gpl-3.0":
        licenseText =
          licenseIntro + "the GNU General Public License v3.0" + " license";
        break;
      case "mit":
        licenseText = licenseIntro + "the MIT" + " license";
        break;
      default:
        licenseText = licenseIntro + "no license";
    }
    return `## ${header}\n` + licenseText + "\n";
  };

  getCorrespondence = (header, githubId, email) => {
    const githubText = `Checkout my GitHub [profile](https://github.com/${githubId})\n`;
    const emailText = `Please feel free to email at: <${email}>\n`;
    return `## ${header}\n` + githubText + "\n" + emailText + "\n";
  };

  getTableOfContents = () => {
    return (
      "## Table of Contents\n" +
      "* [Installation](#installation)\n" +
      "* [Usage](#usage)\n" +
      "* [License](#license)\n" +
      "* [Contributing](#contributing)\n" +
      "* [Testing](#testing)\n" +
      "* [Questions](#questions)\n" +
      "\n"
    );
  };

  getBadge = (licenseType) => {
    const shieldUrlPrefix = "https://img.shields.io/badge/License-";
    const shieldUrlSuffix = "-blue.svg";
    let shieldUrl = "";
    let licenseText = "";
    let licenseUrl = "";

    switch (licenseType) {
      case "apache-2.0":
        shieldUrl = shieldUrlPrefix + "Apache" + shieldUrlSuffix;
        licenseText = "Apache 2.0 license";
        licenseUrl = "https://www.apache.org/licenses/LICENSE-2.0";
        break;
      case "gpl-3.0":
        shieldUrl = shieldUrlPrefix + "GPL%20v3" + shieldUrlSuffix;
        licenseText = "GPLv3 license";
        licenseUrl = "http://www.gnu.org/licenses/gpl-3.0.en.html";
        break;
      case "mit":
        shieldUrl = shieldUrlPrefix + "MIT" + shieldUrlSuffix;
        licenseText = "MIT license";
        licenseUrl = "https://opensource.org/licenses/MIT";
        break;
      default:
        licenseText = licenseIntro + "no license";
    }

    return `[![${licenseText}](${shieldUrl})](${licenseUrl})` + "\n\n";
  };
}

module.exports = Readme;
