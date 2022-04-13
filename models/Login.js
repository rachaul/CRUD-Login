import mongoose from 'mongoose';

const login = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
});

export default mongoose.model('Login', login);