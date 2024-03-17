const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/toDoApp').on('open',()=>{
    console.log('Connected To Database');
}).on('error',()=>{
    console.log('Connection To Database Failed')
});

module.exports = connection;