const express = require('express') ;
const app = express() ;
const note = require('./notes') ;
const dotenv = require('dotenv') ;
// PORT = 5000 ;
dotenv.config() ;
const PORT = process.env.PORT || 3000 ;

app.get("/" , (req , res)=>{
    res.send(`<h1>API is Running</h1>`) ;
});
// Sample Web API for dynamic id 
// app.get("/api/:id" , (req , res)=>{
//     const d = note.find((n)=>{
//         n.id === req.params.id ;
//     })
//     res.send(note.data[0]) ;
// })

app.listen(PORT , console.log(`Server running on ${PORT}`)) ;
