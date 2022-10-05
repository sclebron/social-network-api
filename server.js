const express = require('express');

// const mongodb = require('mongodb').MongoClient;
const db = require('./config/connection');

const routes = require('./routes');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

db.once('open', () => {
        app.listen(PORT, () => {
        console.log(`Now listening at http://localhost:${PORT}`);
    });
});

// const connectionStringURI = `mongodb://127.0.0.1:27017/social-network-api`;


// mongodb.connect(
//     connectionStringURI,

//     { useNewUrlParser: true, useUnifiedTopology: true },
//     (err, client) => {
//     db = client.db();
//     app.use(routes);
//     app.listen(PORT, () => {
//         console.log(`Now listening at http://localhost:${PORT}`);
//     });
//     }
// );
