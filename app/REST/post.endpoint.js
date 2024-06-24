import Joi from "joi";
import auth from "../middleware/auth";
import postService from "../modules/services/post.service"
import applicationException from "../service/applicationException";

const schema = Joi.object({
    title : Joi.string().required(),
    text : Joi.string().required(),
    image : Joi.string().uri().required(),
})

const postEndpoint = (router) => {
    router.post('/api/post', auth, async(req, res, next) => {
        const { title, text, image } = req.body;
        try
        {
            const validatedData = await schema.validateAsync({title, text, image})
            const result = await postService.createNew(validatedData, req.user);
            res.status(200).send(result);
        }catch(err){
            applicationException.errorHandler(err, res);
        };
    });

    router.get('/api/post', auth, async(req, res, next) => 
    {
        const currentPage = req.query.currentPage; 
        
        try
        {
            const posts = await postService.getPagidatedPosts(currentPage);
            res.status(200).send(posts);
        }catch(err)
        {
            applicationException.errorHandler(err, res);
        }
    });

    router.get('/api/post/:postId', auth, async(req, res, next) => 
    {
        const postId = req.params.postId; 
        
        try
        {
            const post = await postService.getSingle(postId);
            res.status(200).send(post);
        }catch(err)
        {
            applicationException.errorHandler(err, res);
        }
    });

    router.delete('/api/post/:postId', auth, async(req, res, next) => 
    {
        const postId = req.params.postId; 
        
        try
        {
            const deletedPost = await postService.deleteSingle(postId, req.user.userId);
            res.status(200).send(deletedPost);
        }catch(err)
        {
            applicationException.errorHandler(err, res);
        }
    });

    router.put('/api/post/:postId', auth, async(req, res, next) => 
    {
        const { title, text, image } = req.body;
        const postId = req.params.postId; 
        
        try
        {
            const validatedData = await schema.validateAsync({title, text, image})
            const editedPost = await postService.editSingle(postId, req.user.userId, validatedData);
            res.status(200).send(editedPost);
        }catch(err)
        {
            applicationException.errorHandler(err, res);
        }
    });

}

export default postEndpoint;