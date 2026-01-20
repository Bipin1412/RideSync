const express = require('express');
const cors = require('cors');

const app = express();
require('dotenv').config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

require('./config/db').connectDB();
const user = require('./routes/user');
app.use('/api/users', user);




app.listen(PORT, () => {
  console.log(`Server is running on port ${port}`);
});