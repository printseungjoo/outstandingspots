import mongoose from 'mongoose';

const studentEmailVerificationSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        expiresAt: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: true,
        id: false
    }
);

studentEmailVerificationSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

const studentEmailVerificationModel = mongoose.model('StudentEmailVerification', studentEmailVerificationSchema);

export default studentEmailVerificationModel;
