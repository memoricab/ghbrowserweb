import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {

    }
    redirectToGithub() {
        console.log(environment.GITHUB_AUTH_URL);
        window.location.href = environment.GITHUB_AUTH_URL;
    }
}