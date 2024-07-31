const express = require('express');
const userRouter = require('./routes/user');
const studyRouter = require('./routes/study')
const progressRouter = require('./routes/progress')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.json());
app.use(cors());
// Define the port
const PORT = process.env.PORT || 3002;

// Mount the user router
app.use('/user', userRouter);
app.use('/tasks', studyRouter )
app.use('/progress', progressRouter)
// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
