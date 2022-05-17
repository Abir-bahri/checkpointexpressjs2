const express = require('express')
const router = express.Router()
const path = require('path')

// const timemiddleware = (req,res,next)=>{
// //     if (Date.now()<9 || Date.now()> 17) {

// //         console.log('the site is closed')
// // }else{ 
    
//     console.log('Time:', Date.now());
//     next();
// }
const hours=(new Date().getHours())
//Middleware
const timemiddleware = (req, res, next)=> {
    if (hours>=12 && hours<=17){
         console.log('we are opened')

         next();
    }

    else {console.log('we are closed');
    res.sendFile(path.join(__dirname,'../','Public','close.html'))

    }
}

router.get('/',timemiddleware,(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Home.html'))
})
router.get('/contact',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Contact.html'))
})
router.get('/services',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','public','Services.html'))
})
module.exports=router