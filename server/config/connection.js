const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/hustleUpDB',  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
}, () => {
    console.log(`Connected to Hustle Up Databases 🐶`)
},);

module.exports = mongoose.connection;
//Set up config vars in heroku using the MONGODB_URI