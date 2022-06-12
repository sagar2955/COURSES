const mongoose = require('mongoose')

const CoursesSchema = new mongoose.Schema({
  name:{
      type:String,
      required:true
  },
  description:{
      type:String,
      required:true
  }
})

module.exports = mongoose.model('course',CoursesSchema)