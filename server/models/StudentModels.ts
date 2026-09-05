import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {
        nickname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        emailVerified: {
            type: Boolean,
            default: false
        },
        id: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        favorites: {
            type: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Store'
            }],
            default: []
        }
    },
    {
        timestamps: true,
        id: false
    }
);

const studentModel = mongoose.model('Student', studentSchema);

export default studentModel;
