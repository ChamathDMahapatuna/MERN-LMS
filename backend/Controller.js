const getCourse = (req, res) => {
  res.status(200).json({ message: 'Server is get' }); 
};

const postCourse = (req, res) => {
  res.status(200).json({ message: 'Server is post' }); 
};

const putCourse = (req, res) => {
  res.status(200).json({ message: 'Server is put' }); 
};  

const deleteCourse = (req, res) => {
  res.status(200).json({ message: 'Server is delete' }); 
};

export { getCourse, postCourse, putCourse, deleteCourse };