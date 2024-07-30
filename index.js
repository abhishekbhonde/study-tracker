const express = require('express');
const userRouter = require('./routes/user');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Define the port
const PORT = process.env.PORT || 3002;

// Mount the user router
app.use('/user', userRouter);

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
