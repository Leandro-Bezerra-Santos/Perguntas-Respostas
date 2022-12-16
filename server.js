const express = require("express");
const app = express();

app.set('view engine', 'ejs');//Dizendo para o express usar o EJS como view engine

app.get('/:name', (request, response) => {
    const name =  request.params;

    response.render('index', {
        name
    });  
})

app.listen(2323, () => console.log('Server in running 👌'));