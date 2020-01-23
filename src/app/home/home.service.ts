import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    userApi = "http://localhost:8080/api/user";

    constructor(private http: HttpClient) {
        this.getUserData();
    }

    getUserData() {
        return this.http.get(this.userApi, { observe: 'response' });
    }
}