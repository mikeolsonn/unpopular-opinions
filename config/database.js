// require our modules (mongoose) 
const mongoose = require('mongoose');

// set up a shortcut variable
const db = mongoose.connection;

// commect to the database server
mongoose.connect(process.env.DATABASE_URL || 'mongodb://localhost/opinions', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up a connection listener 
db.on('connected', function() {
    console.log(`Mongoose connected to ${db.host}:${db.port}`);
});

db.on('error', function(error) {
    console.log(`Encountered an error: ${error}`);
});
