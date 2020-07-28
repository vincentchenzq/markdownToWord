const inquirer = require("inquirer");

module.exports = function run() {
  return inquirer.prompt([
    {
      type: "list",
      name: "admin",
      message: "请选择新员工的角色",
      choices: [
        {
          name: "内勤",
          value: true,
        },
        {
          name: "外包",
          value: false,
        },
      ],
    },
  ]);
};
