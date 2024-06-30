const app = require("./app");
const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.DB_CONNECTION_STRING)
    .then(() => console.log("Connected to Mongodb :)"))
    .catch((err) => console.error("Could not connect to Mongodb.", err));

app.get('/', async (req, res) => {
    res.send("This is the BackEnd of the Diet Project");
});

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on ${port}`));
