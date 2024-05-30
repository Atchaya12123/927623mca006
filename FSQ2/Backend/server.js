require('dotenv').config()
const express=require('express')
const mongoose=require('mongoose')
const app=express()
const proutes=require('./Routes/pRoutes')
//const workoutRoutes = require('./routes/workouts')

app.use(express.json())
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next();
})

app.use('/api/prods', proutes)

mongoose.connect(process.env.MONG)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("listening")
    })
    
}) .catch((error)=>{
console.log(error)
})


