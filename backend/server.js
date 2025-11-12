const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

// Default route
app.get('/', (req, res) => {
  res.send("API is running");
});

// Get all chats
app.get('/api/chat', (req, res) => {
  res.send(chats);
});

// Get single chat by ID
app.get('/api/chat/:id', (req, res) => {
  const singleChat = chats.filter((c) => c._id === req.params.id);
  res.send(singleChat);
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
