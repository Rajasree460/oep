import mongoose from 'mongoose';

const Connection = async () => {
    const URL="mongodb+srv://laharajasree5655:dgqMQdBKuC5kRsls@cluster0.pvlmfpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    try{
       await mongoose.connect(URL)
       console.log("Database connected successfully");
    }catch(error){
        console.log("Error while connecting to the database", error);
    }
}    

export default Connection;