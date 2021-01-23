//Connect to Mongo database
const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;
require('dotenv').config();


const PWD = process.env.DB_PASS;
const USERID = process.env.DB_USER;

  mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://${USERID}:${PWD}@cluster0.fqf9a.mongodb.net/hotelguestblacklist?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
  );

// const uri = 'mongodb://localhost:27017/hotelguestblacklist' 

// mongoose.connect(uri).then(
//     () => { 
//         /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
//         console.log('Connected to Mongo');
        
//     },
//     err => {
//          /** handle initial connection error */ 
//          console.log('error connecting to Mongo: ')
//          console.log(err);
         
//         }
//   );


module.exports = mongoose.connection