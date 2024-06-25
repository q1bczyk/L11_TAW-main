import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { jwtDecode } from "jwt-decode";
import { Observable, map } from "rxjs";
import { ILogin } from "src/app/pages/login/models/login.model";
import { IRegister } from "src/app/pages/register/model/register.model";
import { BaseService } from "src/app/shared/service/base.service";

@Injectable({
    providedIn: 'root'
})

export class UserService extends BaseService
{
    private url : string = this.baseUrl + 'user/';

    constructor(protected override http : HttpClient, private router : Router){
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

    login(data : ILogin) : Observable<any>
    {
        return this.http.post<ILogin>(this.url + 'auth', data)
            .pipe(
                map(response => {
                    return response;
                })
            )
    }

    logout()
    {
        localStorage.removeItem('token');
        this.router.navigate(['/']); 
    }

    isAuthenticated() : boolean
    {
        const token = localStorage.getItem('token');
        return !!token && !this.isTokenExpired(token);
    }

    private isTokenExpired(token : string) : boolean
    {
        const expirationDate = this.getTokenExpirationDate(token);
        return expirationDate === null || expirationDate.valueOf() < new Date().valueOf();
    }

    private getTokenExpirationDate(token : string) : Date | null
    {
        const decodedToken = jwtDecode(token);
        if(decodedToken.exp)
        return new Date(decodedToken.exp * 1000);

     return null;
    }

}