const express = require('express');

const mongodb = require('mongodb').MongoClient;

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017/socialNetworkAPIDB`;

let db;

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

  app.use(express.json());

  app.post('/create', (req, res) => {
    db.collection('petCollection').insertOne(
      { name: req.body.name, breed: req.body.breed },
      (err, results) => {
        if (err) throw err;
        res.json(results);
      }
    );
  });
  
  app.get('/read', (req, res) => {
    db.collection('petCollection')
      .find()
      .toArray((err, results) => {
        if (err) throw err;
        res.send(results);
      });
  });
  
