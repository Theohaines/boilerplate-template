const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

app.use(express.static(path.resolve('src/public/')));

app.get('/', (req, res) => {
    res.sendFile(path.resolve('src/public/pages/homepage/index.html'));
})

app.listen(process.env.PORT, () => {
    console.log('server awake on port: ', process.env.PORT);
})