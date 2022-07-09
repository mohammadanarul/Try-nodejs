const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.use(requestHandle)

app.get('/',(request, response, next)=>{
    console.log(request.hostname);
    console.log('-----------');
    console.log(request.ip);
    response.sendFile(__dirname + "/templates/index.html");
})

app.get('/register',(_request, response, next)=>{
    response.sendFile(__dirname + "/templates/register.html");
})
app.get('/login',(_request, response, next)=>{
    response.sendFile(__dirname + "/templates/login.html");
})

function requestHandle(req, res, next){
    console.log(`${req.method}/${Date()}`)
    console.log('I am exmple middleware.')

    
    next()
}

app.listen(4000,()=>{
    console.log('I am nodejs programer.');
    console.log("http://localhost:4000");
})