const mongoose = require('mongoose');

const connectToDB = async()=>{
  try{
    await mongoose.connect();
    console.log('mongodb is connected successfully');

  }catch(error){
    console.error('Mongodb connection failed', error);
    process.exit(1);
  }
}

module.exports = connectToDB;
