import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BaseService } from "src/app/shared/service/base.service";
import { IGetPost } from "../models/get-post.interface";

@Injectable({
    providedIn: 'root'
})

export class BlogService extends BaseService
{
    private url : string = this.baseUrl + 'post';

    constructor(protected override http : HttpClient){
        super(http);
    }

    getPaginatedPosts(page : number, size : number) : Observable<IGetPost>
    {
        const params : string = `?page=${page}&size=${size}`
        return this.http.get<IGetPost>(this.url + params, )
    } 

    

}