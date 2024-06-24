import applicationException from "../../service/applicationException";
import PostModel from "../schemas/post.schema";

async function createNew(post, user)
{
    const newPost = 
    {
        title : post.title,
        text : post.text,
        image : post.image,
        author : user.userId,
    }

    return new PostModel(newPost)
        .save()
        .then((result) => {
            return result;   
        }).catch((err) => {
            throw applicationException.new(applicationException.BAD_REQUEST, err.message);
        });
}

async function getSingle(postId)
{
    try
    {
        const post = await PostModel
        .findById(postId)
        .populate('author');

        if(!post)
            throw applicationException.new(applicationException.NOT_FOUND, 'Post not found');

        return post;
            
    }catch(err)
    {
        throw applicationException.new(applicationException.BAD_REQUEST, err.message);
    }
}

async function getPagidatedPosts(page)
{
    const limit = 10;
    let paginationSize;

    try
    {
        paginationSize = Math.ceil(await PostModel.countDocuments() / limit);

        const posts = await PostModel
        .find({})
        .sort({'_id' : -1})
        .skip(limit * (page - 1))
        .limit(limit)
        .populate('author')

        if(!posts || posts.length === 0)
            throw applicationException.new(applicationException.NOT_FOUND, 'Posts not found');
        return {posts : posts, paginationSize : paginationSize};     
    }catch(err)
    {
        throw applicationException.new(applicationException.BAD_REQUEST, err.message);
    }
    
}

async function deleteSingle(postId, userId)
{
    const post = await checkPermission(postId, userId);

    try
    {
        await PostModel.deleteOne(post);
        return post;
    }catch(err)
    {
        throw applicationException.new(applicationException.BAD_REQUEST, err.message);
    }

}

async function editSingle(postId, userId, data)
{
    const post = await checkPermission(postId, userId);

    post.title = data.title;
    post.text = data.text;
    post.image = data.image;

    try
    {
        await post.save();
        return post;
    }catch(err)
    {
        throw applicationException.new(applicationException.BAD_REQUEST, err.message);
    }
}

async function checkPermission(postId, userId)
{
    const post = await getSingle(postId);
    
    if(post.author.id !== userId)
        throw applicationException.new(applicationException.UNAUTHORIZED, "you do not have permission to delete this post ");

    return post;
}

export default {
    createNew : createNew,
    getSingle : getSingle,
    getPagidatedPosts : getPagidatedPosts,
    deleteSingle : deleteSingle,
    editSingle : editSingle
}