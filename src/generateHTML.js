// Manager card template
const generateManagerCard = function (manager) {
    return `
    <div class="card m-3" style="width: 21rem;">
        <div class="card-body align-center">
          <h2 class="card-title">Manager</h2>
          <h4> ${manager.name}</h4>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${manager.id}</li>
              <li class="list-group-item">Email: ${manager.email} </li>
              <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
            </ul>
          </div>
        </div>
      </div>
    `
}
// Engineer card template
const generateEngineerCard = function (engineer) {
    return `
    <div class="card m-3" style="width: 21rem;">
        <div class="card-body align-center">
          <h2 class="card-title">Engineer</h2>
          <h4> ${engineer.name}</h4>
          <div class="card" style="width: 18rem;">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${engineer.id}</li>
              <li class="list-group-item">Email: ${engineer.email} </li>
              <li class="list-group-item">Github: ${engineer.github} </li>
            </ul>
          </div>
        </div>
      </div>
    `
}
// Intern card template
const generateInternCard = function (intern) {
    return `
    <div class="card m-3" style="width: 21rem;">
    <div class="card-body align-center">
      <h2 class="card-title">Intern</h2>
      <h4> ${intern.name}</h4>
      <div class="card" style="width: 18rem;">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${intern.id}</li>
          <li class="list-group-item">Email: ${intern.email} </li>
          <li class="list-group-item">School: ${intern.school} </li>
        </ul>
      </div>
    </div>
  </div>
    `
}
// pushes array to page
generateHTML = (data) => {

    cardsArray = [];

    for (let i = 0; i < data.length; i++) {
        const role = data[i];
        const newCard = role.getRole();
    
      // Manager function
    if (newCard === "Manager"){
        const managerCard = generateManagerCard(role);

        cardsArray.push(managerCard);
    }
     // Engineer function
    if (newCard === "Engineer") {
        const engineerCard = generateEngineerCard(role);

        cardsArray.push(engineerCard);
    }
    // Intern function
    if (newCard === "Intern") {
        const internCard = generateInternCard(role);
        
        cardsArray.push(internCard);
    }

    }

    const allCards = cardsArray.join('');

    const generateAll = generateAllCards(allCards)
    return generateAll;
}

    const generateAllCards = function (allCards) {
        return `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <title>My Team</title>
</head>
<body>
  <div class="p-3 bg-dark text-white text-center"><h1>My Team</h1></div>
    <div class="row row-cols-auto justify-content-center">
        ${allCards}

    </div>
  
  </body>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/js/bootstrap.min.js" integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd" crossorigin="anonymous"></script>

</html>
        
        
 `;
    }
    // exports to index
    module.exports = generateHTML;

