const express = require('express')
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

const MONGO_URL = "mongodb+srv://user:user@cluster0.elrjpdv.mongodb.net/?retryWrites=true&w=majority"


// app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

//carpeta public estaticos
app.use(express.json())
app.use(express.static('public'))

//llamar al router
app.use('/', require('./routes/router'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);

mongoose.connect(
    MONGO_URL,
    (err) => {
        if (err) console.log(err)
        else console.log("mongdb is connected");
    }
);

app.use((req, res, next) => {
    console.log("Pagina no encontrada");
    res.status(400).json({
        mensaje: "No encuentra la url"
    })
});

app.listen(8080, () => {
    console.log("boda-web switched on")
})



