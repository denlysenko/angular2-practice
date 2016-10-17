var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  console.log('User Connected...');
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
  socket.on('addMessage', (message, username) => {
    io.emit('message', {
      type: 'newMessage',
      text: message,
      username: username
    });
  });
});

http.listen(8000, () => {
  console.log('Server is running on port 8000');
});
