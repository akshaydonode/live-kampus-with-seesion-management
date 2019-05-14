import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './app';
import { Observable } from 'rxjs';


@Injectable()
export class LoginService {
    baseUrl = "http://localhost:8081";

    constructor(private http: HttpClient) {

    }

    loginUser(email: string, password: string) {
        return this.http.get<Login>(this.baseUrl + "/login/" + email + "/" + password);

    }

}