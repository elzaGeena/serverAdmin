const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const courseRouter = require('./routes/courses')

app.use(cors());
dotenv.config();
//connect to db 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    
() => console.log("connected to db..."))
//middleware
app.use(express.json());

//course router

app.use('/courses',courseRouter)

app.listen(5000, () => console.log('server running...'));