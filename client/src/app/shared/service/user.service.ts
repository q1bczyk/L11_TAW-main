import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IRegister } from "src/app/pages/register/model/register.model";
import { BaseService } from "src/app/shared/service/base.service";

@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService
{
    private url : string = this.baseUrl + 'user/';

    constructor(protected override http : HttpClient){
        super(http);
    }

    register(data : IRegister) : Observable<IRegister>
    {
        return this.http.post<IRegister>(this.url + 'create', data)
            .pipe(
                map(response => {
                    return response;
                })
            )
    }

}