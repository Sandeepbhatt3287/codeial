const express = require('express');
const app = express();
const port = 8000;

// including layouts library
const expressLayouts = require('express-ejs-layouts');

const db =require('./config/mongoose');

app.use(express.static('./assets'));

// defining what is layouts
app.use(expressLayouts);

//extract style and scripts fro sub pages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

// use express router
app.use('/',require('./routes'));

// set up the view engine

app.set('view engine','ejs');

app.set('views','./views');

app.listen(port, function(err){
    if (err){
        // we are using backticks(``) for interpolation
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is running on port : ${port}`);

});