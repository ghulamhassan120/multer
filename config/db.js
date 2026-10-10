const   mongoose  = require("mongoose")

const ConnectDb=async () => {
        try {
            const connected=await mongoose.connect(process.env.MONGO_URI)
            console.log("Connected database ✅")
        } catch (error) {
            console.log("Error database ❌")
        }
}

module.exports=ConnectDb