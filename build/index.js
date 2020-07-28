const userNameQuestion = require("./questions/input-user");
const roleQuestion = require("./questions/input-role");
const start = require("../index");
(async () => {
  try {
    const { userName } = await userNameQuestion();
    const { admin } = await roleQuestion();
    const users = ["geddy", "neil", "alex"];
    start({
      userName,
      admin,
      users,
    });
  } catch (error) {
    console.error(error);
  }
})();
