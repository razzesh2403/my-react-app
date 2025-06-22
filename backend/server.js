const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const FILE_PATH = './users.json';

// Create users.json file if not exists
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, '[]');
}

// Save user details
app.post('/users', (req, res) => {
  const newUser = req.body;

  const data = fs.readFileSync(FILE_PATH);
  const users = JSON.parse(data);
  users.push(newUser);

  fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2));
  res.status(201).json({ message: 'User added successfully' });
});

// Fetch all users
app.get('/users', (req, res) => {
  const data = fs.readFileSync(FILE_PATH);
  const users = JSON.parse(data);
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
