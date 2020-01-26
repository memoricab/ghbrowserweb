import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

const API_BASE_URL = "http://localhost:8080/api"
const USER_API = API_BASE_URL + "/user";
const USER_REPO_API = USER_API + "/repositories";
const SEARCH_USER_API = API_BASE_URL + "/search";


@Injectable({
    providedIn: 'root'
})
export class HomeService {


    constructor(private http: HttpClient) {
        this.getUserData();
    }

    getUserData() {
        return this.http.get<User>(USER_API, { observe: 'response' });
    }

    getSearchUserData(searchUser) {
        console.log(searchUser)
        return this.http.get<User>(SEARCH_USER_API + "/" + searchUser.username);
    }
}

export interface User {
}

export interface UserRepository {
    name: string;
    full_name: string;
    html_url: string;
}

export interface SearchUser {
    username: string;
}