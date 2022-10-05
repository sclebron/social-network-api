const express = require('express');

const mongodb = require('mongodb').MongoClient;

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialNetworkAPIDB`;


mongodb.connect(
    connectionStringURI,

    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      db = client.db();
      app.listen(PORT, () => {
        console.log(`Now listening at http://localhost:${PORT}`);
      });
    }
);

  
