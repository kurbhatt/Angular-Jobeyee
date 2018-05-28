import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from './user';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class UserListService {

    public userUrl = "http://nameless-garden-70410.herokuapp.com/api/user/filter";

    constructor(private http: HttpClient,
        private router: Router) { }

    // getAll(): Observable<User[]> {
    // let headers = new Headers();
    // headers.append('Content-Type', 'api/user/filter');
    // this.http.post(this.userUrl, headers);
    //     return this.http.get<User[]>('/api/user/filter');
    // }

    getAll(): Observable<User[]> {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.get(this.userUrl)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    addBookWithObservable(book: User): Observable<User> {
        let headers = new Headers({ 'Content-Type': 'application/json'});
        return this.http.post(this.userUrl, book)
            .map(this.extractData)
            .catch(this.handleErrorObservable);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || {};
    }

    private handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    }

}

export class BookData implements InMemoryDbService{
    createDb() {
        let users = [
          { id: 1, name: 'Core Java' },
          { id: 2, name: 'Angular 2' },
          { id: 3, name: 'Hibernate' }
        ];
        return {users};
      }
}
