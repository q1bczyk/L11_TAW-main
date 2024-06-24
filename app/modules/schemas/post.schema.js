import mongoose from "mongoose";
import { Schema,} from "mongoose";

const postSchema = new Schema
({
    title : {type : String, require: true},
    text : {type : String, require: true},
    image : {type : String, require: true},
    author : {type: Schema.Types.ObjectId, ref: 'user', require: true},
})

const PostModel = mongoose.model('Post', postSchema);

export default PostModel;