const CourseModel = require('../model/]course')


// Create
const createCourse = (req,res,next) => {
    let {name,description} = req.body
    CourseModel.create({
        name,
        description
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added course Successfully"
        })
    })
}

// Read
const readAllcourses = (req,res,next) => {
    CourseModel.find({}, (err,result) => {
        if(err)
        next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the course",
            data:{
                course: result
            }
        })
    })
} 

// Read By Id
const readCourseById = (req,res,next) => {
    CourseModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved course By ID",
            data:{
                course: result
            }
        })
    })
} 


// Update By Id
const updateCourseById = (req,res,next) => {
    CourseModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated course By ID",
            data:{
                course: result
            }
        })
    })
} 

// Delete Movie By Id
const deleteCourseById = (req,res,next) => {
    CourseModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted course By ID",
            data:{
                course: result
            }
        })
    })
} 

module.exports = {createCourse, readAllcourses, readCourseById, updateCourseById, deleteCourseById}