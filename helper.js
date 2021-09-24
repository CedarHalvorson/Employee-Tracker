const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

export function role () {
  
    return inquirer.prompt([    
        
      {
        type: 'database',
        name: 'role',
        message: 'would you like to',
        choices: ['',''],
      },
    ]);
};

const employees = () => {
    return inquirer.prompt([ 
      {
        type: '',
        name: '',
        message: '',
      },
    ]);
};

const promptUser = () => {
        return inquirer.prompt([ 
      {
        type: '',
        name: '',
        message: '',
      },
    ]);
};

const promptUser = () => {
    return inquirer.prompt([ 
      {
        type: '',
        name: '',
        message: '',
      },
    ]);
  };

