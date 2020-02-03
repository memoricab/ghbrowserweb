import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = "ghbrowserweb";

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
                localStorage.setItem(environment.ACCESS_TOKEN, token);
                this.router.navigateByUrl("/home");
            } else {
                window.alert("Error receiving token: " + params['error']);
                this.router.navigateByUrl("/login");
            }
        });
    }
}