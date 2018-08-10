console.log("Hello");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

var port = process.env.PORT || 8082;

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.get("/status",function(req,res){
    res.send("Hello");
})

app.listen(port, function(){
    console.log("Now listening to port "+port);
});
