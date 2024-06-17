import express from 'express';
import {PORT , MongoDBURL} from './config.js';
import mongoose from 'mongoose'; 
import courseRoutes from './routes/courseRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies

// middleware for handling cors policy


app.get('/', (Request, response) => {
  console.log(Request); 
  return response.status(234).send('Hello, world!');
});

app.use('/course', courseRoutes);

mongoose.connect(MongoDBURL).then(() => {
  console.log('Connected to MongoDB!');
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
} ).catch((error) => {
  console.log('Error connecting to MongoDB: ', error);
});



