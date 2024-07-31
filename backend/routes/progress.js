// routes/progress.js
const express = require('express');
const router = express.Router();
const { Progress } = require('../db/db.js'); // Adjust path if necessary

router.use(express.json());

// Handle storing study and rest hours
router.post('/checkprogress', async (req, res) => {
    const { studyhours, resthours } = req.body;

    // Validate input
    if (typeof studyhours !== 'number' || typeof resthours !== 'number') {
        return res.status(400).json({ message: 'Invalid input. Study hours and rest hours must be numbers.' });
    }

    try {
        // Create or update the entry for today
        const date = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
        const newEntry = {
            date,
            studyhours,
            resthours
        };

        const progress = await Progress.findOneAndUpdate(
            { date },
            newEntry,
            { new: true, upsert: true } // Create a new document if it doesn't exist
        );

        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error saving progress data', error });
    }
});

// Handle retrieving stored data
router.get('/getprogress', async (req, res) => {
    try {
        // Retrieve all progress entries from the database
        const progress = await Progress.find();

        if (progress.length === 0) {
            return res.status(200).json({ message: 'No progress data available.' });
        }

        res.status(200).json(progress);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving progress data', error });
    }
});

module.exports = router;
