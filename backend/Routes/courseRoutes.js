import express from 'express';
import { getCourses, getCourse, postCourse, putCourse, deleteCourse } from '../Controller.js';
const router = express.Router();

// Route to get all courses
router.get('/', getCourses);
// Route to get a single course by ID
router.get('/:id', getCourse);
// Route to create a new course
router.post('/', postCourse);
// Route to update a course by ID
router.put('/:id', putCourse);
// Route to delete a course by ID
router.delete('/:id', deleteCourse);

export default router;