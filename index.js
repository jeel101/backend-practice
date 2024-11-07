require('dotenv').config()
const express = require("express");
const app = express();

app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/login', (req, res) => {
    res.send("you're on login page");
})

app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`);
})