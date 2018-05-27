import { Injectable } from '@angular/core';
import { Response, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UserListService {
    public listUrl = "http://nameless-garden-70410.herokuapp.com/api/user/filter";
    constructor(private http: HttpClient) { }

    getCustomer(body) {
        //using get request
        return this.http.get('"http://nameless-garden-70410.herokuapp.com/api/user/filter')
            .map((response: Response) => response.json());
    }

    //Create article
    createArticle(article) {
        let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        // let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.listUrl, article)
    }
}