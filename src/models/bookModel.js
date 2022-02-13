const mongoose =  require('mongoose');

const bcrypt =  require('bcrypt');
const jwt =  require('jsonwebtoken');


const Schema = mongoose.Schema;

const bookSchema = new Schema({

    bookId:String,
    name:String,
    author:String,
    publisher:String,
    price:Number

},{
    timestamps:true
});

module.exports = mongoose.model("Book", bookSchema);
