import mongoose from "mongoose"; 

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://mphojames9:Beekman907.@cluster0.ygntd.mongodb.net/oneStop').then(()=>console.log("DB connected"));
}