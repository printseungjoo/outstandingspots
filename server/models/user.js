const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI_USER ,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log('Successfully connected to MongoDB'))
.catch((err)=>console.error('Cannot connect to MongoDB'))


const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;