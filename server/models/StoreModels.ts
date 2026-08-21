import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    category: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    },
    name: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    },
    branch: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    },
    naverMap: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    lon: {
        type: Number,
        required: true
    },
    discount: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    },
    description: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    },
    openTime: {
        type: String,
        required: true
    },
    closeTime: {
        type: String,
        required: true
    },
    theme: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    },
    address: {
        kor: {
            type: String,
            required: true
        },
        eng: {
            type: String,
            required: true
        }
    }
});

const storeModel = mongoose.model('Store', storeSchema);

export default storeModel;