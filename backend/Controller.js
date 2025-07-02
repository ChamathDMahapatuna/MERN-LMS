import { Course } from './models/LMSmodel.js';

// Get all courses
const getCourses = async (req, res) => {
  try {
    const courses = await Course.find({});
    return res.status(200).json({
      count: courses.length,
      courses: courses,
    });
  } catch (error) {
    console.error('Error fetching courses: ', error);
    return res.status(500).send('Error fetching courses: ' + error.message);
  }
};

// Get a single course by ID
const getCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);
    if (!course) return res.status(404).send('Course not found');
    return res.status(200).json({ course });
  } catch (error) {
    console.error('Error fetching course: ', error);
    return res.status(500).send('Error fetching course: ' + error.message);
  }
};

// Create a new course
const postCourse = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.price) {
      return res.status(400).send('Request body is missing title, author, or price');
    }
    const newCourse = {
      title: req.body.title,
      author: req.body.author,
      price: req.body.price,
    };
    const course = await Course.create(newCourse);
    return res.status(201).send(course);
  } catch (error) {
    console.log('Error saving course: ', error);
    res.status(500).send('Internal server error');
  }
};

// Update a course by ID
const putCourse = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.price) {
      return res.status(400).send('Request body is missing title, author, or price...');
    }
    const { id } = req.params;
    const course = await Course.findByIdAndUpdate(id, req.body);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    return res.status(200).send({ message: 'Course updated successfully' });
  } catch (error) {
    console.error('Error updating course: ', error);
    return res.status(500).send('Error updating course: ' + error.message);
  }
};

// Delete a course by ID
const deleteCourse = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findByIdAndDelete(id);
    if (!course) {
      return res.status(404).send('Course not found');
    }
    return res.status(200).send({ message: 'Course deleted successfully' });
  } catch (error) {
    console.error('Error deleting course: ', error);
    return res.status(500).send('Error deleting course: ' + error.message);
  }
};

export { getCourses, getCourse, postCourse, putCourse, deleteCourse };