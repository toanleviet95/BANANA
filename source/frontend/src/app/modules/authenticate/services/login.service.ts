import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

import { environment } from '../../../../environments/environment';

@Injectable()
export class LoginService {
    constructor(private http: HttpClient) {
    }

    login(username: string, password: string) {
        let authenUrl = environment.serviceUrl + '/accounts/findOne';
        let obj = {
            userName: username,
            password: password
        };
        let body = this.serializeObj(obj);
        let options = {
            headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded'),
            params: obj
        };

        return this.http.get(authenUrl, options).catch(this.handleServerError);
    }

    private handleServerError(error: any) {
        let err: Error;
        if (error === undefined || error === null) {
            err = new Error('Unkown server error');
        } else if (error.status === 0) {
            err = new Error('Unable to connect to server. Please try again');
        } else {
            err = new Error(JSON.parse(error.error).error_description);
        }
        return Observable.throw(err);
    }

    private serializeObj(obj) {
        let result = [];
        for (let property in obj) {
            if (obj.hasOwnProperty(property)) {
                result.push(encodeURIComponent(property) + '=' + encodeURIComponent(obj[property]));
            }
        }
        return result.join('&');
    }
}