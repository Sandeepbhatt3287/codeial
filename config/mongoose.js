const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost/codeial_devlopment');
const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiong to Mongodb"));

db.once('open',function(){
    console.log('Connected t o datbase :: Mongodb');
});

module.exports = db;
