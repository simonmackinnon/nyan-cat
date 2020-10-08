'use strict';

const express = require('express');
const http = require('http')
const fs = require('fs')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.sendFile('./index.html', { root: __dirname });
});

app.use(express.static('./'));

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);