require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');

const app = express();
connectDB();

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Welcome to Freelancer Api!');
});

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/payments', require('./routes/paymentRoutes'));


app.listen(7000, () => console.log(`Server running on port 7000`));
