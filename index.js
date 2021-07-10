const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const courseRouter = require('./routes/courses')
const facultyRouter = require('./routes/faculties')
const studentRouter = require('./routes/students')
const semdetailRouter = require('./routes/semdetails')

app.use(cors());
dotenv.config();
//connect to db 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true },
    
() => console.log("connected to db..."))
//middleware
app.use(express.json());

//course router
app.use('/courses',courseRouter)
app.use('/faculties',facultyRouter)
app.use('/students',studentRouter)
app.use('/semdetails',semdetailRouter)

app.listen(5000, () => console.log('server running...'));