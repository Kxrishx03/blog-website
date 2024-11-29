const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


//ROUTES
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);


//CONNECT TO DB
mongoose.connect(process.env.MONGO_URI,{
    dbName: 'blogDB',
  })
.then(()=>{
    console.log("Connection succesfull");
    app.listen(PORT || 5000,()=>{
        console.log("Running on : " + PORT);
    })
});