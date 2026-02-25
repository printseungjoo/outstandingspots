const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
    photo: {
        type: String,
        required: true
    },
    category: {
        kor: {
            type: String,
            required: true,
            unique: true
        },
        eng: {
            type: String,
            required: true,
            unique: true
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
    }
});

const storeModel = mongoose.model('Store', storeSchema);

export default storeModel;