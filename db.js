const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/hotel'; // Removed extra space and fixed casing

mongoose.connect(mongoURL)
    .then(() => console.log("Mongoose is connected to the server"))
    .catch((err) => console.error("MongoDB connection error:", err));

const db = mongoose.connection;

db.on('disconnected', () => {
    console.log("Mongoose is disconnected from the server");
});
//git commit

module.exports = db;
