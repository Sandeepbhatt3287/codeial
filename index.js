const express = require('express');
const app = express();
const port = 8000;

// use express router
app.use('/',require('./routes'));

// set up the view engine

app.set('view engine','ejs');

app.set('view','./views');

app.listen(port, function(err){
    if (err){
        // we are using backticks(``) for interpolation
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is running on port : ${port}`);

});