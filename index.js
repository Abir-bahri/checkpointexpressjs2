const express = require ('express')
const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.json())


// app.get('/Home',(req,res)=>{
//     res.sendFile(__dirname+'/public/Home.html')
// })
// app.get('/contact',(req,res)=>{
//     res.sendFile(__dirname+'/public/Contact.html')
// })
// app.get('/services',(req,res)=>{
//     res.sendFile(__dirname+'/public/Services.html')
// })
app.use('/views',require('./routes/view'))
app.listen(5000,(err)=>{
    if(err) throw err
    else console.log('server is running on port 5000')
})
// const timemiddleware = (req,res,next)=>{
//     console.log('Time:', Date.now());
//     next();}

// app.use('/time',timemiddleware)