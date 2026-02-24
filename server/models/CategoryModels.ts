const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
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
    }
});

const categoryModel = mongoose.model('Category',categorySchema);

export default categoryModel;