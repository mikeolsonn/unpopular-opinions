// require the modules and initialize settings variables
const express = require('express');
const port = 3000;

const indexRouter = require('./routes/index');
const opinionsRouter = require('./routes/opinions');
const methodOverride = require('method-override');

const morgan = require('morgan');

const session = require('express-session');

const passport = require('passport');

// create the express app
const app = express();

// configure server settings
require('dotenv').config();

require('./config/database');

require('./config/passport');

app.set('view engine', 'ejs');

// mount middleware
app.use(methodOverride('_method')); 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

// mount routes
app.use('/', indexRouter);
app.use('/opinions', opinionsRouter) 

// tell app to listen 
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});