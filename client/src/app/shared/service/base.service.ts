import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
    providedIn : 'root'
})

export class BaseService{
    
    constructor(protected http : HttpClient){}

    protected baseUrl : string = "http://localhost:3001/api/";
    protected setHeaders() : HttpHeaders{
        const token = localStorage.getItem('token');
        
        const headers = new HttpHeaders({
            'Authorization': `Bearer ${token}`
        });

        return headers;
    }

}