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
    loaded = false;

    constructor(
        private loginService: LoginService,
        private router: Router
    ) {
        this.loaded = true;
        this.routeToHomeIfLoggedIn();
    }

    loginGithub() {
        this.loginService.redirectToGithub();
    }

    routeToHomeIfLoggedIn() {
        this.loginService.checkIfAuth().subscribe(response => {
            this.loaded = true;
            this.router.navigateByUrl("/home");
        });;
    }
}
