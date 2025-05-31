const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
//require('dotenv').config();
require('dotenv').config({ path: '../.env' });


const apiRoutes = require('./routes/apiRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api', apiRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
