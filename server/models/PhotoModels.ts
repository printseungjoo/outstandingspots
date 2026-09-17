import mongoose from 'mongoose';

const photoSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true,
        unique: true
    },
    contentType: {
        type: String,
        required: true
    },
    data: {
        type: Buffer,
        required: true
    }
});

const photoModel = mongoose.model('Photo', photoSchema);

export default photoModel;
