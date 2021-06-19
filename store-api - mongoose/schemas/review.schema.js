import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema(
    {
        name: String,
        description: String
    }, { collection: "productInfo" }
);

export default ReviewSchema;