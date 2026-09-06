import mongoose from 'mongoose';

const ownerSchema = new mongoose.Schema(
    {
      name: {
        type: String,
        required: true
      },
      phone: {
        type: String,
        required: true,
        unique: true
      },
      storeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Store',
        required: true
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
      phoneVerified: {
        type: Boolean,
        default: false
      },
      firebaseUid: {
        type: String,
        unique: true,
        sparse: true
      },
      status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
        }
    },
    {
        timestamps: true,
        id: false
    }
);

const ownerModel = mongoose.model('Owner', ownerSchema);

export default ownerModel;