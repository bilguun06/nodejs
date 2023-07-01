
const express = require('express');
const mongoose = require('mongoose');
const app = express();


mongoose
  .connect('mongodb://localhost/task_management_app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
