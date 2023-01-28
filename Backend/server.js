const express = require('express') ;
const app = express() ;
const dotenv = require('dotenv') ;
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes') ;

dotenv.config() ;
const PORT = process.env.PORT || 3000 ;
connectDB() ;
app.use(express.json()) ;
const notes = [
    {
        _id:"1" ,
        title:"Day1 of college",
        content:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        category:"College"
    },
    {
        _id:"2",
        title:"My first Wish",
        content : "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs.",
        category:"wish"
    }
]
app.get("/" , (req , res)=>{
    res.send(`<h1>API is Running</h1>`) ;
});
// app.get("/api/notes" , (req , res)=>{
//     res.json(notes);
// })
// Sample Web API for dynamic id 
// app.get("/api/notes/:id" , (req , res)=>{
//     const  d = notes.find((n)=> n._id === req.params.id)
//     res.send(d) ;
// })
app.use('/api/users' , userRoutes) ;
app.use(notFound) ;
app.use(errorHandler) ;

app.listen(PORT , console.log(`Server running on ${PORT}`)) ;
