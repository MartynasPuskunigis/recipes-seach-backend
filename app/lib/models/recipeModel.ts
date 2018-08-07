import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const RecipeSchema = new Schema({
    publisher: {
        type: String,
        required: "enter a publisher"
    },
    f2f_url: {
        type: String
    },
    title: {
        type: String
    },
    source_url: {
        type: String
    },
    recipe_id: {
        type: String
    },
    image_url: {
        type: String
    },
    social_rank: {
        type: Number
    },
    publisher_url: {
        type: String
    },
    created_date: {
        type: Date,
        default: Date.now
    }
});
