// Gets dynamic html
const generateHTML = require('./src/generateHTML');
// Gets manager
const Manager = require('./lib/Manager');
// gets engineer
const Engineer = require('./lib/Engineer');
// gets intern
const Intern = require('./lib/Intern');
// gets fs to write file
const fs = require('fs');
// gets inquirer 
const inquirer = require('inquirer');


// empty array to generate all roles
const genArray = [];

// prompt function to ask questions
const genRole = () => {
          
    inquirer.prompt ([
        {
            type: 'list',
            name: 'position',
            message: 'Enter position',
            choices: ['Manager', 'Engineer', 'Intern']
        },

        {
            type: 'input',
            name: 'name',
            message: 'Enter name'
        },

        {
            type: 'input',
            name: 'id',
            message: 'Enter ID number'
            
        },

        {
            type: 'input',
            name: 'email',
            message: 'Enter email'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number.',
            when: (input) => input.position === "Manager"
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter Github user',
            when: (input) => input.position === "Engineer"
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter school name',
            when: (input) => input.position === "Intern"
        },
        {
            type: 'confirm',
            name: 'exitTeam',
            message: 'Do you want to add more team members?',
            default: false

        }
        
    ])
    // answers to generate according to role
    .then(answers => {
   
        let {name, id, email, officeNumber, github, school, exitTeam} = answers;
        let role;

        if (answers.position === "Manager"){
            role = new Manager (name, id, email, officeNumber);
            console.log(role)

        } else if (answers.position === "Engineer") {
            role = new Engineer (name, id, email, github);
            console.log(role)
            
        } else if (answers.position === "Intern"){
            role = new Intern (name, id, email, school); 
            console.log(role)
        } 
     
        genArray.push(role)
       
       
        if (exitTeam){
            return genRole(genArray);
        } else {
            const toHTML = generateHTML(genArray)
            if(generateHTML){
                renderCards(toHTML)
            }
        }    
    })
};


const renderCards = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Success!")
        }
    })
}; 

genRole()


