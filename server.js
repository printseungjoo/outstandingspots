require('dotenv').config({path:'./server/.env'});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const categoryModel = require('./server/models/category.js');
const optionModel = require('./server/models/option.js');

const app = express();
const PORT = process.env.PORT || 5500;

app.use(cors({
    origin: [
        'http://localhost:5500',
        'https://www.outstandingspots.com',
        'https://outstandingspots.com',
        'https://web-production-888c9.up.railway.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/categories', async (req, res) => {
    try {
        const categories = await categoryModel.find({}, 'name');
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

app.get('/options', async (req, res) => {
    try {
        const options = await optionModel.find({}, 'photo category name name2 naverMap lat lon discount etc');
        res.json(options);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

let categories = [];
app.post('/categories', async (req, res) => {
    const {name} = req.body;
    try {
        const newC = new categoryModel({ name });
        await newC.save();
        res.status(201).json({ newC });
    } catch (err) {
        res.status(500).json({ error: 'One more time' });
    }
})

app.put('/categories/:id', async (req, res) => {
    try {
        const updatedCategory = await categoryModel.findOneAndUpdate(
            { _id: req.params.id },
            { name: req.body.name },
            { new: true }
        );
        if (!updatedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json(updatedCategory);
    } catch (err) {
        res.status(500).json({ error: 'Failed to update category' });
    }
});

app.delete('/categories/:id', async (req, res) => {
    try {
        const deletedCategory = await categoryModel.findOneAndDelete({_id:req.params.id});
        if (!deletedCategory) {
            return res.status(404).json({ error: 'Category not found' });
        }
        res.json({ message: 'Category deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete category' });
    }
});


app.post('/options', async (req, res) => {
    try {
        const newO = new optionModel(req.body)
        await newO.save();
        res.status(201).json({ message: "매장 추가 성공" });
    } catch (err) {
        res.status(500);
    }
})

app.listen(PORT, () => {
    console.log('Server running');
})