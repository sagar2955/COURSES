const express = require('express')
const router = express.Router()
const courseController = require('../controller/course')

// Create
router.post('/create',courseController.createCourse)
// Read
router.get('/getAllCourse',courseController.readAllcourses)
// Read By Id
router.get('/getCourseById/:id',courseController.readCourseById)
// Update By Id
router.put('/updateCourseById/:id',courseController.updateCourseById)
// Delete By Id
router.delete('/deleteCourseById/:id',courseController.deleteCourseById)

module.exports = router