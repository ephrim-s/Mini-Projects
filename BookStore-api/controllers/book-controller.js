const Book = require('../models/book')
const getAllBooks = async (req, res)=> {
  try {
    const allBooks = await Book.find();
    if(allBooks?.length > 0){
      res.status(200).json({
        success: true,
        message: 'Books found',
        data: allBooks});
    } else {
      res.status(404).json({
        success: false,
        message: 'No books found'
    });
      
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false,
        message: 'Something went wrong Please try again'
  })};
};
const getSingleBookById = async (req, res)=> {
  try {
    const getCurrentBookId = req.params.id;
    const singleBook = await Book.findById(getCurrentBookId);
    if(!singleBook){
      res.status(200).json({
        success: true,
        message: 'Books found',
        data: allBooks});
    } else {
      res.status(404).json({
        success: false,
        message: 'No books found'
    });
      
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({success: false,
        message: 'Something went wrong Please try again'
  })};
pass
};
const addNewBook = async (req, res)=> {
  try {
    const newBookFormData = req.body;
    console.log(newBookFormData);
    const newlyCreatedBook = await Book.create(newBookFormData);
    if(newBookFormData){
      res.status(201).json({
        success: true,
        message: 'Book added successfuly',
        data: newlyCreatedBook 
      });
    }
    
  } catch (error) {
    console.log(error);    
  }
};
const updateBook = async (req, res)=> {
pass
};
const deleteBooks = async (req, res)=> {
pass
};

module.exports = {getAllBooks, getSingleBookById, addNewBook, updateBook, deleteBooks};