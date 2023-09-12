const express = require('express');
const cors = require('cors');
const authRoutes = require('../Backend/Routes/Auth');
const Connection =require('../Backend/Database.js')

const app = express();
const port =5000;

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.use('/', authRoutes);


Connection()
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

