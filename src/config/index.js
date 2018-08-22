import mongodb from 'mongodb';

export default {
  // "port": 3005,
  // "mongoUrl": "mongodb://localhost:27017/chat-api",
  "port": process.env.PORT,
  "mongoUrl": "mongodb://root:12345a@ds229732.mlab.com:29732/chatdb",
  "bodyLimit": "100kb"
}
