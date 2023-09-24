const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Connect to MongoDB
mongoose.
connect("mongodb+srv://admin:123@crud-api.5rgdwol.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp")
.then(() => {
    console.log("Successfully Connected")
}).catch(() =>{
    console.log("Not connected. Some error")
})

// Middlewares
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/Users'));

app.use('/', (req, res) =>{
  res.send('Welcome to my site');
})


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});
