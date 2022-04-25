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

app.get('/register',(request, response, next)=>{
    response.sendFile(__dirname + "/templates/register.html");
})

function requestHandle(req, res, next){
    console.log(`${req.method}/${Date()}`)
    console.log('I am exmple middleware.')

    
    next()
}

app.listen(4000,()=>{
    console.log('I am nodejs programer.');
})