const express = require('express');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist/')));

const logData = [];

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => console.log('a user disconnected'));
  socket.on('evaluation', expression => {
    logData.push(expression);
    io.emit('evaluation', logData);
  })
});

http.listen(5000, () => console.log('listening on port 5000'));
