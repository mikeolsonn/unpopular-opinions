// require our modules (mongoose) 
const mongoose = require('mongoose');

// set up a shortcut variable
const db = mongoose.connection;

// commect to the database server
mongoose.connect('mongodb://localhost/opinions', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up a connection listener 
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});
