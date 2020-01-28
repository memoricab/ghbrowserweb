import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GITHUB_AUTH_URL } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {

    }
    redirectToGithub() {
        window.location.href = GITHUB_AUTH_URL;
    }
}