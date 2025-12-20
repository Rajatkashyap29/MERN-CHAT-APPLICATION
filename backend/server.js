const express = require('express');
const { chats } = require('./data/data');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const UserRoutes = require('./routes/UserRoutes')
const chatRoutes = require('./routes/chatRoutes');
const {notFound,errorHandler} = require('./middlewares/errorMiddleware')

const app = express();
dotenv.config();
connectDB();
app.use(express.json());

// Default route
app.get('/', (req, res) => {
  res.send("API is running");
});

app.use('/api/user', UserRoutes);
app.use('/api/chat', chatRoutes);

// app.use(notFound)
// app.use(errorHandler)


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
