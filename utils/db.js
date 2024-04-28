const mongoose=require("mongoose");
const URI="mongodb://localhost:27017/";
const connectdb=async ()=>{
    try {
        await mongoose.connect(URI);
        console.log("Connection with the database is success");
    } catch (error) {
        console.error(error);
        process.exit(0);
    }
}
module.exports=connectdb;