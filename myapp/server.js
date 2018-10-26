var express = require('express');
var app = express();
var bodyParser = require ('body-parser');
app.use(bodyParser.json())

require.apply('.myapp/routes/index.js')(app);

var server = app.listen(3300, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("App listining at http://%s:%s", host, port)
})