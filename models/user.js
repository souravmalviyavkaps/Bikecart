import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

userSchema.pre('save', async function (next){
    if(! this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
})

const User = mongoose.model('User', userSchema);

export default User;