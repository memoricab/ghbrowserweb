import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(private loginService: LoginService) {

    }

    loginGithub() {
        this.loginService.redirectToGithub();
    }
}
