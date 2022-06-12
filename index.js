const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
require("dotenv").config();

const app = express()
const learnerRoute = require('./app/api/routes/learner')
const coursesRoute = require('./app/api/routes/courses')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
app.set('secretKey','hdjsakfhdjsk')

const userValidation = (req, res,next) => {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), 
    (err,decoded) =>{
        if(err){
            res.json({
                message: err
            })
        }
        next()
    })
}

app.use(logger('dev'))
app.use(bodyParser.json())
app.use("/learner",learnerRoute)
app.use("/courses",userValidation, coursesRoute)


app.get('/home', (req,res)=>{
    res.json({
        "APP": "Learner courses API Application",
        "message": "Successfully Running the Application"
    })
})

const mongoURI = "mongodb+srv://sagargunjal2955:sagar@cluster0.7a5skea.mongodb.net/?retryWrites=true&w=majority"


mongoose.connect(mongoURI)
.then(()=>{
    console.log("Successfully Connected to the database")

})
.catch((err)=>{
    console.log("not Connected")
    console.log(err)

})
app.listen(process.env.PORT || 5000,() => {
    console.log("Successfully Running on the PORT: 5000")
})