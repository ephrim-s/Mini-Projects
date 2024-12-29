require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const bookRoutes = require('./routes/book-routes');




const app = express();
const PORT = process.env.PORT || 3000;

//Connect to out database
connectToDB();

//middleware -> express.json
app.use(express.json());

//routes here
app.use('/api/books', bookRoutes);


app.listen(PORT, ()=>{
  console.log(`Server started success on port ${PORT}`);
});