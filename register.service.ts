import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

@Injectable()
export class RegisterService {
    public configUrl = "http://nameless-garden-70410.herokuapp.com/api/user";

    constructor(private http: HttpClient) { }

    getRegister(data: any) {

        var user = JSON.stringify(data);
        var headers = new Headers();
        headers.append('Content-Type', 'api/user');
        return this.http.post(this.configUrl, user);

    }

}

