const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = 8000;

// including layouts library
const expressLayouts = require('express-ejs-layouts');

const db =require('./config/mongoose');

//including express session and used for session cookie
const session = require('express-session');

// including  authentication passport 
const passport = require('passport');
const passpostLocal = require('./config/passport-local-strategy');




app.use(express.urlencoded());

//setting up the cookie Parser
app.use(cookieParser());

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


// adding middleware express-session
app.use(session({
    name:'codeial',
    // TODO change the secret before deployment in production mode
    secret:'something',
    saveUninitialized:false,
    resave:false,
    cookie:{
        maxAge:(1000*60*100)
    }
}));

app.use(passport.initialize());
app.use(passport.session());

app.listen(port, function(err){
    if (err){
        // we are using backticks(``) for interpolation
        console.log(`Error in running the server ${err}`);
    }
    console.log(`server is running on port : ${port}`);

});