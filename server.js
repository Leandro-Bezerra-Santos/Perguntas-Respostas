const express = require("express");

const connections = require('./database/connection')
const askModel = require('./database/ask');
const Response = require('./database/response')

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
    //Listando perguntas
    askModel.findAll({raw: true, order: [
            ['id','DESC']
    ]}).then(ask => {
        response.render('index', {
            ask
        })
    }) //ele é reponsavél por pegar todas as perguntas do banco de dados
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

app.get('/ask/:id', (request, response) => {
    const { id } = request.params;

    //busca no banco de dados
    askModel.findOne({
        where: {id}
    })//Método que busca um ddado com uma codndição
    .then(ask => {
        if(ask != undefined){
            response.render('askFilter',{
                ask,
            })
        }else{
            response.render('404')
        }
    })
})
1
app.listen(2323, () => console.log('Server in running 👌'));1