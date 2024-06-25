import { IGetPost } from "./get-post.interface";

export interface IGetPaginationPost
{
    paginationSize : number,
    posts : IGetPost[]
}