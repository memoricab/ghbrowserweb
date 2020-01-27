import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { HomeService } from '../home/home.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoaded = false;

    constructor(
        private loginService: LoginService,
        private router: Router
    ) {
        this.isLoaded = true;
    }

    loginGithub() {
        this.loginService.redirectToGithub();
    }
}
