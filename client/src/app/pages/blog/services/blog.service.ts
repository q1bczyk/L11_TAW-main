import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { BaseService } from "src/app/shared/service/base.service";
import { IGetPaginationPost } from "../models/get-pagination-post.interface";

@Injectable({
    providedIn: 'root'
})

export class BlogService extends BaseService
{
    private url : string = this.baseUrl + 'post';

    constructor(protected override http : HttpClient){
        super(http);
    }

    getPaginatedPosts(page : number) : Observable<IGetPaginationPost>
    {
        const params : string = `?currentPage=${page}`
        return this.http.get<IGetPaginationPost>(this.url + params, {headers : this.setHeaders()})
            .pipe(
                map(res => {
                    return res;
                })
            )
    } 

    

}