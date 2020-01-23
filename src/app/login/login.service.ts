import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GITHUB_AUTH_URL } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    authCheckApi = "http://localhost:8080/api/user/auth"

    constructor(private http: HttpClient) {

    }
    redirectToGithub() {
        window.location.href = GITHUB_AUTH_URL;
    }

    checkIfAuth() {
        return this.http.get(this.authCheckApi, { observe: 'response' });
    }
}