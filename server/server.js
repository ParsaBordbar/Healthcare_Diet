const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bmi = require('./routes/bmi')

app.use(cors());
app.use(express.json());
app.use('/api/bmi', bmi);

mongoose.connect('mongodb://localhost/healthcareDiet', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
        const db = mongoose.connection;
        db.listCollections({name: 'bmi_forms'})
            .next(function(err, collinfo) {
                if (!collinfo) {
                    db.createCollection('bmi_forms', function(err, res) {
                        if (err) throw err;
                        console.log("Collection created!");
                    });
                }
            });
    })
    .catch((err) => console.error("Could not connect to MongoDB.", err));


const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on ${port}`));