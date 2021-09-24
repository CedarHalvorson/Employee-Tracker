// my sql workbench 
// inquire
// THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
// es6 
// require("./helper");
const inquirer = require('inquirer');
const mysql = require("mysql2");

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'iHaveasmile22',
    database: 'business_db'
  },
  console.log(`Connected to the business_db database.`)
);

init();



function init() {
  //  role();
  viewAll();
}

function viewAllDepartments() {
  db.promise().query("SELECT * FROM department_table;").then(([answer]) => {
    console.table(answer);
    // create a for loop on answer to filter out each department name 
    // re loop back to viewAll
    // reference query.sql
    viewAll()
  });
}

function viewAllRoles() {
  console.log("proof")
}


function viewAll() {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'listView',
      message: 'What would you like to choose',

      choices: ['view all departments', 'view all roles', 'view all tables','add department','add role']
    //   choices: [{ name: 'view all departments', value: 'view_all_departments' }, { name: 'view all roles', value: 'view_all_roles' }, { name: 'view all tables', value: 'view_all_tables' }, { name: 'add department', value: 'add_Department' }, { name: 'add role', value: 'add_role' }],
    }])
    
    .then(response => {
      let choice = response.listView
      // console.log(choice)
      switch (choice) {
        case "view all departments":
          viewAllDepartments();
          break;
        case "view all roles":
          viewAllRoles();
          break;
        case "view all tables":
          viewAllTables();
          break;
          case "add Department":
            addDepartment();
            break;
        case "add role":
            addRole();
          break;


      }

      // console.log(response)
    })
}

function viewAllRoles() {
  db.promise().query("SELECT * FROM role_table;").then(([answer]) => {
    console.table("\n", answer);
    // create a for loop on answer to filter out each department name 
    // re loop back to viewAll
    // reference query.sql
    viewAll()
  });
}



function viewAllTables() {
  Promise.all([
    db.promise().query("SELECT * FROM department_table"),
    db.promise().query("SELECT * FROM role_table"),
    db.promise().query("SELECT * FROM employee_table")
  ])
    .then((tables) => {
      tables.forEach(([answer]) => console.table(answer));
       // create a for loop on answer to filter out each department name 
    // re loop back to viewAll
    // reference query.sql
    viewAll()
  });
}

function addDepartment() {
  inquirer.prompt([
    {
      name: "departmentName",
      message: "What is the name of the department you'd like to add?",
      type: "input"
    },
      
  ])
  .then(function(res) {
  db.promise().query("INSERT INTO department_table SET ?", {
    name: res.departmentName,
  
  }).then(([answer]) => {
    console.table(answer);
    // create a for loop on answer to filter out each department name 
    // re loop back to viewAll
    // reference query.sql
    viewAll()
  });
}
// addDepartment()
  )}








  
function addRole() {
  inquirer.prompt([
    {
      name: "roleName",
      message: "What is the name of the role you'd like to add?",
      type: "input"
    },
      {
        name: "salary",
        message: "whats the salary",
        type: "input"
      },
  ])
  .then(function(res) {
    db.promise().query("INSERT INTO role_table SET ?", {
      title: res.roleName,
      salary: res.salary,

    }).then(([answer]) => {
      console.table(answer);
  
  
      viewAll()
    });
  
  })
 
}








// export function role () {

//   return inquirer.prompt([    

//     {
//       type: 'database',
//       name: 'role',
//       message: 'would you like to',
//       choices: ['',''],
//     },
//   ]);
// };

// const employees = () => {
//   return inquirer.prompt([ 
//     {
//       type: '',
//       name: '',
//       message: '',
//     },
//   ]);
// };

// const promptUser = () => {
//       return inquirer.prompt([ 
//     {
//       type: '',
//       name: '',
//       message: '',
//     },
//   ]);
// };

// const promptUser = () => {
//   return inquirer.prompt([ 
//     {
//       type: '',
//       name: '',
//       message: '',
//     },
//   ]);
// };















// role_table.title, role_table.salary, role_table.department_id, employee_table.first_name, employee_table.last_name, employee_table.manager_id