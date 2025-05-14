
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const uri = `mongodb+srv://${process.env.AUTH_USERNAME}:${process.env.PASSWORD}@cluster0.hy8a5.mongodb.net/Movies?retryWrites=true&w=majority&appName=Cluster`;

const connectDB = async () => {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
};

export default connectDB;


