var inquirer = require('inquirer');
var fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        name: 'first',
        message: 'Hello! Type your first name please.'
    },
    {
        type: 'input',
        name: 'second',
        message: 'Hello! Type your first name please.'
    },
    {
        type: 'input',
        name: 'third',
        message: 'Hello! Type your first name please.'
    },
    {
        type: 'input',
        name: 'fourth',
        message: 'Hello! Type your first name please.'
    }
])
.then(function(answers) {
    console.log('What is this?', answers);
    var readMeString = `
    Title ${answers.first}
    Description ${answer.second}
    `
    fs.writeFile('README.md', readMeString, function (err) {
        if (err) throw err;
        console.log('Saved!');
      });
})
