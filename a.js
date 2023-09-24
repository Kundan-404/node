const express = require('express')
const res = require('express/lib/response')
const mongoose = require('mongoose')
const app = express()
const port = 3000


app.get('/', (req,res) => {
    res.send('Hello World');
})

app.get('/blog', (req,res) => {
    res.send('Hello World My blog');
})

app.post("/recipe", (req, res)=>{
    console.log(req.body);
    res.send(req.body);
})

app.listen(port, () =>{
    console.log("App listening from port ${port}")
})

mongoose.
connect("mongodb+srv://admin:123@crud-api.5rgdwol.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(() => {
    console.log("Successfully Connected")
}).catch(() =>{
    console.log("Not connected. Some error")
})