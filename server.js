const express = require('express');
const connection = require('./config/db.js');
require('dotenv').config(); //

const app = express();

app.use(express.json()) //

connection();

//app.use('/api/task',require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5300;
app.listen(PORT, ()=>console.log('Server running',PORT));