import express from 'express';
import { Course } from '../models/LMSmodel.js';
const router = express.Router();

router.post('/', async (request, response) => {
  try {
    // Check if required fields are present in the request body
    if (!request.body.title || !request.body.author || !request.body.price) {
      return response.status(400).send('Request body is missing title, author, or price');
    }
    console.log('lol')
    // Create a new course object based on the request body
    const newCourse = {
      title: request.body.title,
      author: request.body.author,
      price: request.body.price
    };
    console.log('lol')

    // Save the new course to the database
    const course = await Course.create(newCourse);

    // Respond with the saved course object
    return response.status(201).send(course);
  } catch (error) {
    console.log('Error saving course: ', error);
    response.status(500).send('Internal server error');
  }
});
router.get('/', async (request, response) => {
  try {
    const courses = await Course.find({});
    return response.status(200).json({
      count : courses.length,
      courses: courses,
    }); // Use 200 OK status code
  } catch (error) {
    console.error('Error fetching courses: ', error); // Log the error for debugging
    return response.status(500).send('Error fetching courses: ' + error.message); // Send a more descriptive error message
  }
});
router.get('/:id', async (request, response) => {
  try {
    const { id }  = request.params;
    const course = await Course.findById(id);
    return response.status(200).json({course}); // Use 200 OK status code
  } catch (error) {
    console.error('Error fetching courses: ', error); // Log the error for debugging
    return response.status(500).send('Error fetching courses: ' + error.message); // Send a more descriptive error message
  }
});
router.put('/:id', async (request, response) => { 
  try {
    if (!request.body.title || !request.body.author || !request.body.price) {
      return response.status(400).send('Request body is missing title, author, or price...');
    }

    const { id } = request.params;

    const course = await Course.findByIdAndUpdate(id,  request.body);
    if(!course){
      return response.status(404).send('Course not found');
    }
    return response.status(200).send({message: 'Course updated successfully'});
  }catch(error){
      console.error('Error updating course: ', error);
      return response.status(500).send('Error updating course: ' + error.message);
    }
});
router.delete('/:id', async (request, response) => {

  try {
    const { id } = request.params;
    const course = await Course.findByIdAndDelete(id);
    if(!course){
      return response.status(404).send('Course not found');
    }
    return response.status(200).send({message: 'Course deleted successfully'});
  }catch(error){  
    console.error('Error deleting course: ', error);
    return response.status(500).send('Error deleting course: ' + error.message);
  
  }

}); 

export default router;