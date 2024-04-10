import mongoose from 'mongoose';

export const DbConnection = async() => {
    try {
        await mongoose.connect(process.env.DB_URI);
         console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error.message); 
    }

}