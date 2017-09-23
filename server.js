var express = require('express'),

app = express(),
port = process.env.PORT || 3000;
bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var userRoutes = require('./api/routes/userRoutes');
var fighterRoutes = require('./api/routes/fighterRoutes');

userRoutes(app);
fighterRoutes(app);

app.listen(port);

console.log('Fantasy RESTful API server started on: ' + port);