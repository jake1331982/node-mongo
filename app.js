const e = require("express");
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");


const dbname = 'prueba'
const uri=
`mongodb://localhost:27017/${dbname}`
//`mongodb+srv://${usuario}:${password}@cluster0.ncdk5.mongodb.net/${dbName}?retryWrites=true&w=majority`;

async function connect(){
  try{
    await mongoose.connect(uri);
    console.log("conected a mongo")
  }catch (error){
    console.log(error);
  }
}
connect();

app.use('/', require('./router/Rutasweb'));
app.use('/mascotas/', require('./router/Mascotas'));
app.use('/mascotas/crear', require('./router/Mascotas'));

//app.use('/', require('./router/'))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});