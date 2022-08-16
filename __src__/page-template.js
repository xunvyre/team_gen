generatePage = (teamArr) =>
{
    teamCards = [];

    for (let i = 0; i < teamArr.length; i++)
    {
        const currentEmployee = teamArr[i];

        if (teamArr[i].getRole() === 'Manager')
        {
            const managerCard = createManagerCard(currentEmployee);
            teamCards.push(managerCard);
        }
        else if (teamArr[i].getRole() === 'Engineer')
        {
            const engineerCard = createEngineerCard(currentEmployee);
            teamCards.push(engineerCard);
        }
        else if (teamArr[i].getRole() === 'Intern')
        {
            const internCard = createInternCard(currentEmployee);
            teamCards.push(internCard);
        }
    }
};

const createManagerCard = managerData =>
{
    console.log(managerData);
};

const createEngineerCard = engineerData =>
{
    console.log(engineerData);
};

const createInternCard = internData =>
{
    console.log(internData);
};


module.exports = generatePage;