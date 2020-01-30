import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Router } from '@angular/router';
import { User } from './home.service';
import { tap, debounceTime, switchMap, finalize } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Alert } from '../extra/alert.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    //todo boolean refactor

    //main
    user: User;
    isAuthenticated = false;
    isLoaded = false;

    //search
    searchProfileActive = false;
    isSearching = false;
    isGoingBackToProfile = false;

    // auto complete
    autoCompleteList: any;
    searchForm: FormGroup;
    isLoading = false;


    constructor(public alert: MatDialog, private fb: FormBuilder, private router: Router, private homeService: HomeService) {
        this.showUserData();
    }

    showUserData() {
        this.homeService.getUserData().subscribe(response => {
            this.user = response.body;
            this.isAuthenticated = true;
            this.isLoaded = true;
            this.isGoingBackToProfile = false;
        }, error => {
            if (error) {
                this.router.navigateByUrl('/login');
            }
        });;
    }

    searchForUser(username) {
        if (username.trim()) {
            this.isSearching = true;
            this.homeService.getSearchUserData(username).subscribe(response => {
                this.searchProfileActive = true;
                this.user = response.body;
                this.isSearching = false;
            }, error => {
                if (error.error.status === 404) {
                    this.showUserNotFoundAlert(username);
                }
            })
        }
    }

    goBackToMyProfile() {
        this.isGoingBackToProfile = true;
        this.searchForm.get('usernameInput').setValue('');
        this.searchProfileActive = false;
        this.showUserData();
    }


    ngOnInit() {
        this.searchForm = this.fb.group({
            usernameInput: ""
        })

        this.searchForm
            .get('usernameInput')
            .valueChanges
            .pipe(
                debounceTime(300),
                tap(() => this.isLoading = true),
                switchMap(value => this.homeService.getAutoCompleteList(value)
                    .pipe(
                        finalize(() => this.isLoading = false)
                    )
                )
            ).subscribe(data => this.autoCompleteList = data);
    }

    displayFn(autoComplete) {
        if (autoComplete) {
            return autoComplete;
        }
    }

    showUserNotFoundAlert(username) {
        this.alert.open(Alert, {
            width: '250px',
            data: { message: username + " not found on Github.", title: "Not Found" }
        });
        this.isSearching = false;
    }

    logout() {
        localStorage.removeItem("accessToken");
        this.router.navigateByUrl("/login");
    }
}
