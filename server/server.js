const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const axios = require('axios');
//dotenv to inject environment variable
require('dotenv').config();

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/

app.get('/trending', (req, res) => {

        axios
        .get(`http://api.giphy.com/v1/gifs/trending?api_key=${process.env.GIPHY_API_KEY}`)
        .then((response) => { //GET arrives in the server
            console.log(response.data);
            res.send(response.data);//to send to client side
        }).catch((err) => {
            console.log(err);
        })
    })

/** ---------- START SERVER ---------- **/
app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
})

