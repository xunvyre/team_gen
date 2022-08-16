//generates the html
const generatePage = teamArr =>
{
    teamCardsArr = [];

    for (let i = 0; i < teamArr.length; i++)
    {
        //identify data and send off to functions for creation
        const currentEmployeeData = teamArr[i];

        if (currentEmployeeData.getRole() === 'Manager')
        {
            const managerCard = createManagerCard(currentEmployeeData);
            teamCardsArr.push(managerCard);
        }
        else if (currentEmployeeData.getRole() === 'Engineer')
        {
            const engineerCard = createEngineerCard(currentEmployeeData);
            teamCardsArr.push(engineerCard);
        }
        else if (currentEmployeeData.getRole() === 'Intern')
        {
            const internCard = createInternCard(currentEmployeeData);
            teamCardsArr.push(internCard);
        }
    }
    //join the array together as a string
    const teamCards = teamCardsArr.join('');
    //and create the html
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="./style.css">
        <title>Team Generator</title>
    </head>
    
    <body>
        <header>
            <h1>Development Team</h1>
        </header>
    
        <main class="container">
            <div class="row">
                ${teamCards}
            </div>
        </main>
            
        <footer>
            <h3> &copy; Xunvyre 2022</h3>
        </footer>
    </body>
    </html>`;
};

const createManagerCard = managerData =>
{
    return `
        <div class="card col-12">
            <div class="card-title">
                <h4>${managerData.name}</h4>
                <h5>Manager</h5>
            </div>
            <div class="card-body">
            <p class="card-text">
                ID: ${managerData.id} <br />
                Email: ${managerData.email} <br />
                Office: ${managerData.office} <br />
            </p>
            </div>
        </div>
    `;
};

const createEngineerCard = engineerData =>
{
    return `
        <div class="card col-md-auto">
            <div class="card-title">
                <h4>${engineerData.name}</h4>
                <h5>Engineer</h5>
            </div>
            <div class="card-body">
            <p class="card-text">
                ID: ${engineerData.id} <br />
                Email: ${engineerData.email} <br />
                GitHub: <a href="https://github.com/${engineerData.github}">${engineerData.github}</a><br />
            </p>
            </div>
        </div>
    `;
};

const createInternCard = internData =>
{
    return `
        <div class="card col-md-auto">
            <div class="card-title">
                <h4>${internData.name}</h4>
                <h5>Engineer</h5>
            </div>
            <div class="card-body">
            <p class="card-text">
                ID: ${internData.is} <br />
                Email: ${internData.email} <br />
                School: ${internData.school} <br />
            </p>
            </div>
        </div>
    `;
};

module.exports = generatePage;