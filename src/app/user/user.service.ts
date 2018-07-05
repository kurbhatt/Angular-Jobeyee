import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { User } from './user';

@Injectable()
export class UserService {

    constructor(private _http: Http) { }

    getResponse(): Observable<User[]> {
        return this._http
            .get("http://nameless-garden-70410.herokuapp.com/api/user")
            .map(res => res.json());
    }

    getRegister(data: any) {
        var user = JSON.stringify(data);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post("http://nameless-garden-70410.herokuapp.com/api/user", user).map(res => res.json());;
    }
}
