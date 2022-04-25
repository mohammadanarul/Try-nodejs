const express = require('express') 

const app = express()

app.use(requestHandle)

function requestHandle(req, res, next){
    console.log(`${req.method}/${req.port}`)
    console.log('I am exmple middleware.')
    next()
}

app.listen(()=>{
    console.log('i am a middleware.');
})