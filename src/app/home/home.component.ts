import { Component } from '@angular/core';
import { HomeService, UserRepository } from './home.service';
import { Router } from '@angular/router';
import { User } from './home.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    user: User;
    authenticated = false;
    loaded = false;
    searchUser = {};
    searchProfileActive = false;


    constructor(router: Router, private homeService: HomeService) {
        this.showUserData(router);
    }

    showUserData(router: Router) {
        this.homeService.getUserData().subscribe(response => {
            this.user = response.body;
            this.authenticated = true;
            this.loaded = true;
        }, error => {
            if (error) {
                router.navigateByUrl('/login');
            }
        });;
    }

    searchForUser() {
        this.homeService.getSearchUserData(this.searchUser).subscribe(response => {
            this.searchProfileActive = true;
            this.user = response;
            this.searchUser = "";
        })
    }

    goBackToMyProfile(router: Router) {
        this.searchUser = "";
        this.searchProfileActive = false;
        this.showUserData(router);
    }
}
