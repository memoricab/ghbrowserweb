import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    user = {}
    authenticated = false;
    loaded = false;

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
}
