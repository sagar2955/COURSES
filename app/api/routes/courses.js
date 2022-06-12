const express = require('express')
const router = express.Router()
const CoursesController = require('../controller/courses')

// Create
router.post('/create',CoursesController.createCourse)
// Read
router.get('/getAllCourses',CoursesController.readAllCourses)
// Read By Id
router.get('/getCoursesById/:id',CoursesController.readCourseById)
// Update By Id
router.put('/updateCoursesById/:id',CoursesController.updateCoursesById)
// Delete By Id
router.delete('/deleteCoursesById/:id',CoursesController.deleteCoursesById)

module.exports = router