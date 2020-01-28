import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ACCESS_TOKEN } from './app.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

}

@Component({
    selector: 'app-redirect',
    templateUrl: 'redirecthandler.component.html'
})
export class RedirectHandler {
    constructor(private router: Router, activatedRoute: ActivatedRoute) {
        activatedRoute.queryParams.subscribe(params => {
            let token = params['token'];
            if (token) {
                localStorage.setItem(ACCESS_TOKEN, token);
                this.router.navigateByUrl("/home");
            } else {
                window.alert("Error receiving token: " + params['error']);
            }
        });
    }
}


//TODO fix when search gives 404 loading bar