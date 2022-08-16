const fs = require('fs');

const writeFile = fileContent =>
{
    return new Promise((resolve, reject) => 
    {
        fs.writeFile('./__dist__/index.html', fileContent, err =>
        {
            //if there's an error, reject the Promise and send the error to the catch method
            if (err)
            {
                reject(err);
                return;
            }

            //if resolved, send successful data to the then method
            resolve
            ({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

const copyFile = () =>
{
    return new Promise ((resolve, reject) =>
    {
        fs.copyFile('./__src__/style.css', './__dist__/style.css', err =>
        {
            if (err)
            {
                reject(err);
                return;
            }
            resolve
            ({
                ok: true,
                message: 'Stylesheet created!'
            });
        });
    });
};

module.exports = { writeFile, copyFile };