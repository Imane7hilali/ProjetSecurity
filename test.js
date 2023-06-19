const WebSocket = require('ws');

const mac_address = 'imane'; // replace this with your mac address
const socket = new WebSocket(`ws://localhost:8000/ws/vitalsigns/average/${mac_address}`);

socket.on('open', function() {
    console.log('Connected to the server');
});

socket.on('message', function(message) {
    const data = JSON.parse(message);
    console.log('Received:', data);
});

socket.on('error', function(error) {
    console.log('Error:', error);
});

socket.on('close', function() {
    console.log('Connection closed');
});

