const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            minlength: [3, 'Title must be at least 3 characters long'],
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
            minlength: [10, 'Content must be at least 10 characters long'],
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true } 
);

module.exports = mongoose.model('Post', PostSchema);
