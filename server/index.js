const express = require('express');

const app = express();

const http = require('http').Server(app);
const io = require('socket.io')(http);
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '/../client/dist/')));

//Temp data not persisted so it will disappear if server restarts or shuts down
const logData = [];

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', () => console.log('a user disconnected'));
  socket.on('evaluation', expression => {
    if (expression) logData.unshift(expression);
    if (logData.length > 10) logData.pop();
    io.emit('evaluation', logData);
  })
});

http.listen(process.env.PORT || 5000, () => console.log('listening on port 5000'));
