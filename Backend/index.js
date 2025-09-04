const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./src/Models/db');
const taskRouter = require('./src/Routers/task.router');
const cors = require('cors');

const PORT = process.env.PORT ;


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// ✅ Allowed Origins List
const allowedOrigins = [
  "http://localhost:3000",
  "http://192.168.43.98:3000" // Add your LAN IP
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },

   credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH']
}));

app.use('/api/tasks', taskRouter);



app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});




