import mongoose from 'mongoose';

const schema = mongoose.Schema;

const TodoSchema = new schema({
    todo: {
        type: String,
        required: true
    },
    addedby:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
},{timestamps:true})

export const Todo = mongoose.models?.todos || mongoose.model('todos',TodoSchema);