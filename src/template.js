const newHtml = () => {
    return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT"
                crossorigin="anonymous"
            />
            <link rel="stylesheet" href="style.css" />
            <title>Employee Management</title>
        </head>
        <body>
            <header class="d-flex flex-row justify-content-center mb-4 custom-header">
                <h1>Team</h1>
            </header>
            <main class="d-flex flex-row justify-content-around align-items-center mb-4 flex-wrap">
    `;
};

const closingHtml = () => {
    return `
            </main>
        </body>
    </html>
    `;
};

const managerHtml = (manager) => {
    return `
        <div class="card custom-card manager-card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title" id="user-name">${manager.userName}</h5>
                <p class="card-text" id="title">${manager.getPosition()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${manager.email
        }">${manager.email}</a></li>
                <li class="list-group-item">Office Number: ${manager.officeNumber
        }</li>
            </ul>
        </div>
    `;
};

const engineerHtml = (engineer) => {
    return `
        <div class="card custom-card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title" id="user-name">${engineer.userName}</h5>
                <p class="card-text" id="title">${engineer.getPosition()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item">Email: <a href="mailto:${engineer.email
        }">${engineer.email}</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/
                ${engineer.github}" target="_blank">${engineer.github}</a></li>
            </ul>
        </div>
    `;
};

const internHtml = (intern) => {
    return `
        <div class="card custom-card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title" id="user-name">${intern.userName}</h5>
                <p class="card-text" id="title">${intern.getPosition()}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${intern.id}</li>
                <li class="list-group-item">Email: <a href="mailto:
                ${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School: ${intern.school}</li>
            </ul>
        </div>
    `;
};

module.exports = {
    newHtml,
    managerHtml,
    engineerHtml,
    internHtml,
    closingHtml,
};
