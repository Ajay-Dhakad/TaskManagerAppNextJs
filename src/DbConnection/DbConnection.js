import mongoose from 'mongoose';

export const DbConnection = async() => {
    let db;

   if(!db){ try {
        await mongoose.connect(process.env.DB_URI);
        db = true;
    } catch (error) {
        console.log(error.message); 
        db = false;
        process.exit();
    }}

}