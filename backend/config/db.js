import mongoose from "mongoose";

 export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://GreatStack:935370@cluster0.og8qz.mongodb.net/fooddelivery').then(()=>console.log('DB Connected'));
}