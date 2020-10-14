class Content {
  constructor(type, body) {
    this._content = {
      type: type,
      body: body,
    };

    this.getContent = () => {
      return this._content;
    };

    this.setContent = (type, body) => {
      this._content.type = type;
      this._content.body = body;
    };
  }
}

module.exports = Content;
