const mongoose = require('mongoose');

const connectToDB = async()=>{
  try{
    await mongoose.connect('mongodb+srv://ephrims5:BGgtECVWIk6ZnyiH@cluster0.kfdwj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log('mongodb is connected successfully');

  }catch(error){
    console.error('Mongodb connection failed', error);
    process.exit(1);
  }
}

module.exports = connectToDB;