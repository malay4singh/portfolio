require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./models/Message');
const PORT = process.env.PORT;

const server = express();



// -----------------------------------database connection
connectDB(process.env.DB_URL);



// -----------------------------------server config
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(cors({
        origin: '*',
        methods: ['POST'],
        allowedHeaders: ['Content-Type']
}));



// -----------------------------------routes
server.post('/portfolio', async (req, res) => {
        const { name, phone, email, message } = req.body;

        await Message.create({ name, phone, email, message });

        res.status(201).json({
                success: true
        })
})

server.listen(PORT, () => {
        console.log(`Server running on Port ${PORT}`);
})



// -----------------------------------functions
async function connectDB(url){
        await mongoose.connect(url);
        console.log(`Database Connected`);
}
