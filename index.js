const express = require('express')
const app = express()   
const indexRouter = require('./routes/index')
const userRouter = require('./routes/users')
const dashboardRouter = require('./routes/dashboard')
const PORT = process.env.port || 8000

app.use(express.json())                   //to parse the body
app.use('/', indexRouter)
app.use('/users', userRouter)
app.use('/dashboard', dashboardRouter)


app.listen(8000, ()=>console.log('App running in port 8000'))