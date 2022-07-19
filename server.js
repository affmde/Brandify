const express= require("express");
const app= express();
const cors= require("cors");
const path = require("path");
const mongoose= require("mongoose");
const usersRouter = require('./Routes/usersRoutes');

require("dotenv").config();

mongoose.connect(process.env.MONGODB_CONNECTION_STRING, ()=>{
    console.log('Mongoose connected successfuly!')
})


//Middlewares
app.use(cors());
app.use(express.json());
app.use('/users', usersRouter);
app.use(express.static(path.resolve(__dirname, "./client/build")));



/*app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
  });*/

  app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  });


const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`App listen on port: ${PORT}`)
})



