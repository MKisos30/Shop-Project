const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL, () => {
    console.log('DB connected');
});

app.use(express.json());


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})