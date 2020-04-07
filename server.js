const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

// Alive?
app.get('/ping', function (req, res) {
    return res.send('pong');
});

// Direct all requests to index.html so React-Router works properly
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port);

console.log("App started on port", port);