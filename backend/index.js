import express from "express"
import dotenv from "dotenv";
import mongoose from "mongoose"
import bookRoute from "../backend/route/book.route.js"
import userRoute from "../backend/route/user.route.js"
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.log("Error:",error);
}

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`Server running at ${PORT}`);
});
