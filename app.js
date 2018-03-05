const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const user = require('./routes/user.js')


app.use('/users',user)


app.listen(3000,()=>{
  console.log('AYE:3000');
})
