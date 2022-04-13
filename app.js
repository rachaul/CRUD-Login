import express from 'express';
import mongoose from 'mongoose';
import route from './routes/user.js';
import cors from "cors"
const app = express();

mongoose.connect('mongodb://localhost:27017/rachauldb');
const db = mongoose.connection;
db.on('err', (error) => console.log(error));
db.once('open', () => console.log(`Sudah Terkoneksi ke database`));

app.use(cors());
app.use(express.json());
app.use('/login', route);

app.listen('1998', () => console.log(`Server Running at Port: 1998`));