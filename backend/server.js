const { PeerServer } = require('peer');

const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/syncpals',
  allow_discovery: true
});

console.log(`SyncPals signaling server live on port ${port}`);