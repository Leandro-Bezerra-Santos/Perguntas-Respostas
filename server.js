const express = require("express");
const app = express();
const body_parser = require('body-parser')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json());
app.use(body_parser.urlencoded({ extended:false }));


app.get('/', (request, response) => {
    response.render('index')
})

app.get('/ask', (request, response) => {
    response.render('ask')
})

app.post('/askSave', (request, response) =>{
    const {title, description} = request.body;

    response.status(200).json(`Titulo: ${title}, Descrição: ${description}`);
})

app.listen(2323, () => console.log('Server in running 👌'));