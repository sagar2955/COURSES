const CoursesModel = require('../model/courses')


// Create
const createCourse = (req,res,next) => {
    let {name,description} = req.body
    CoursesModel.create({
        name,
        description
    }, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Added courses Successfully"
        })
    })
}

// Read
const readAllCourses = (req,res,next) => {
    CoursesModel.find({}, (err,result) => {
        if(err){
            next(err)
            console.log(err)
        }
        res.json({
            status:"Success",
            message:"Successfully Retrieved all the courses",
            data:{
                courses: result
            }
        })
    })
} 

// Read By Id
const readCourseById = (req,res,next) => {
    CoursesModel.findById(req.params.id, (err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Retrieved Course By ID",
            data:{
                courses: result.id
            }
        })
    })
} 


// Update By Id
const updateCoursesById = (req,res,next) => {
    CoursesModel.findByIdAndUpdate(req.params.id,req.body,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Updated courses By ID",
            data:{
                courses: result
            }
        })
    })
} 

// Delete Movie By Id
const deleteCoursesById = (req,res,next) => {
    CoursesModel.findByIdAndRemove(req.params.id,(err,result) => {
        if(err)
            next(err)
        res.json({
            status:"Success",
            message:"Successfully Deleted courses By ID",
            data:{
                todo: result
            }
        })
    })
} 

module.exports = {createCourse, readAllCourses, readCourseById, updateCoursesById, deleteCoursesById}