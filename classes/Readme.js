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
  get All() {
    return this.getAll();
  }

  // Methods
  getAll = () => {
    return this;
  };
}

module.exports = Readme;
