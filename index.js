var restify = require('restify');
var HOST = 'http://example.com'
var client = restify.createJsonClient({ url: HOST });

var headers = {};
headers['Connection'] = 'close'; // Uncomment this line to see the connection get closed immediately.

client.get({path: '/', headers: headers }, function (err, req, res, body) {
  console.log(res.statusCode);
});

var socket = client.agent.sockets[HOST + ':80:']; // Replace ':80:' with ':443:' if the protocol is ssl.

if (socket.length) {
  socket[0].on('end', () => { // The 'end' event is triggered when the FIN packet is sent https://nodejs.org/api/net.html#net_event_end
    console.log('disconnected from server');
  });
}

setTimeout(function () {
  console.log('no FIN packet received from service')
}, 30000); // Wait 30 seconds for socket to disconnect before ending script.
