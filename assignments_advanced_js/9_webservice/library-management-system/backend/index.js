// index.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());

// Security Middleware
const helmet = require('helmet');
const cors = require('cors');
app.use(helmet());
app.use(cors());

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));

// Error Handling Middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


