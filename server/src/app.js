console.log("Hello");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const { sequelize } = require('./models');
const config = require('./config/config');

var port = process.env.PORT || 8082;

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

require('./routes/routes.js')(app);

sequelize.sync()
    .then(() => {
        app.listen(config.port, function () {
            console.log("Now listening to port " + config.port);
        });
    })


