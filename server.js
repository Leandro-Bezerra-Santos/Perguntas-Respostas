const express = require("express");
const connections = require('./database/connection')
const askModel = require('./database/ask');

const app = express();
const body_parser = require('body-parser')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json());
app.use(body_parser.urlencoded({ extended:false }));


connections.authenticate()
.then( () => {
    console.log("connection sucess")
}).catch( (err) => {
    console.log(err)
}); 

app.get('/', (request, response) => {
    response.render('index')
})

app.get('/ask', (request, response) => {
    response.render('ask')
})

app.post('/askSave', (request, response) =>{
    const {title, description} = request.body;

    //Colocando os valores na tabela
    askModel.create({
        title,
        description
    }).then( () => {
        response.redirect('/')
    })
})

app.listen(2323, () => console.log('Server in running 👌'));