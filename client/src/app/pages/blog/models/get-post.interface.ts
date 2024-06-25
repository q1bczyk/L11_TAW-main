import { IAddPost } from "./add-post.interface";
import { IAuthor } from "./authror.interface";

export interface IGetPost extends IAddPost
{
    id : string,
    author : IAuthor
}