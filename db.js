require('dotenv').config();
let mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;
const database = 'capconnect';
class Database {
    constructor(){
        this.connect()
    }

connect(){
    mongoose.connect(MONGODB_URI)
        .then(()=>{
            console.log('database connection successful')
        })
        .catch(err => {
            console.error('error connecting')
        })
    }    
}


module.exports = new Database()
