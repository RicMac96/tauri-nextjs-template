import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    windows:{
      type: String,
    },
    password: {
      type: String,
    },
    access: {
      type: String,
      required: true,
      enum: ['operator','coordinator','admin'],
      default:'operator'
    }
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

const User = mongoose.model('User', userSchema);

export default User;
