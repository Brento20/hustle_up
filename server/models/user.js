const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const hireSchema = require('./Hire');

const userSchema = new Schema(
    {
    username: {
        type: String,
        required: true,
        unique: true,
        immutable: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please use a valid email address'],
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    equipmentHire: [hireSchema],
    },

    {
        toJSON: {
        virtual: true,
        },
    }
);


userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});


userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


userSchema.virtual('equipment').get(function () {
    return this.hiredEquipment.length;
});

const User = model('User', userSchema);

module.exports = User;
