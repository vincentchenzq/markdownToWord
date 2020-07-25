const fs = require("fs");
const path = require("path");
const ejs = require("ejs");
const marked = require("marked");
const templatePath = "./template/welcome.md";

/**
 * @description 替换模板文件中的变量
 * @param {*} tempPath 模板路劲
 * @param {*} options  需要替换的变量
 */
function renderFile(tempPath, options) {
    return new Promise((resolve, reject) => {
      ejs.renderFile(tempPath, options, function (err, result) {
        if (err) {
          reject(err);
          return;
        }
        resolve(result);
      });
    });
  }

  
renderFile(templatePath, {
    admin: false,
    userName: 'vincent'
})
renderFile(templatePath, {
    admin: true,
    userName: 'vincent'
})