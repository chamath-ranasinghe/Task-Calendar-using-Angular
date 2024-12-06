const express = require('express');
const cors = require('cors');

let Tasks = [
    {id:1,text: "Pickup food", date: "December 15th", reminder:true},
    {id:2,text: "Watch Movie", date: "December 16th", reminder:false}]

const app = express();

const corsOptions = {
    origin: 'http://localhost:4200', // Allow requests only from this origin
    methods: ['GET', 'POST'],      // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
};

app.use(cors(corsOptions));


app.get("/tasks",(req,res)=>{
    res.json(Tasks);
})

app.listen(8080,()=>{
    console.log("Server Successfully Running");
})