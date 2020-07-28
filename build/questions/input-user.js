const inquirer = require('inquirer');

module.exports = function run () {
  return inquirer
    .prompt([
      {
        type: 'input',
        name: 'userName',
        message: '请输入新员工名称？',
        validate (val) {
            if (!val) {
              return '此项必填，请输入新员工名称';
            }
            return true;
          },
      },
    ])
  ;
};
