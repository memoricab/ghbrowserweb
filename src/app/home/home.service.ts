import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

const API_BASE_URL = "http://localhost:8080/api"
const USER_API = API_BASE_URL + "/user";
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

    getSearchUserData(username) {
        return this.http.get<User>(SEARCH_USER_API + "?username=" + username, { observe: 'response' });
    }

    getAutoCompleteList(query) {
        return this.http.get(SEARCH_USER_API + "/?autoCompleteQuery=" + query);

    }
}

export interface User {
}

export interface UserRepository {
    name: string;
    full_name: string;
    html_url: string;
}