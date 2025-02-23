const express = require('express');
const app = express();
const db = require('./db'); // Ensure DB connection is established
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Import routes and models
const personRouter = require('./routes/personRoutes');
// const menuRouter = require("./routes/menuItems"); // Ensure correct file name

// Use routes
app.use('/person', personRouter);
// app.use('/menu', menuRouter);

// Root route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
