const Content = require("./classes/Content");

const init = async () => {
  const test1 = new Content("title", "My Title");
  console.log(test1.getContent());
  test1.setContent("title", "Updated Title");
  console.log(test1.getContent());
};

init();
