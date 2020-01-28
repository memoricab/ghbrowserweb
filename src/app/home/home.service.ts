import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BASE_URL } from '../app.service';


const USER_API = BASE_URL + "/api/user";
const SEARCH_USER_API = BASE_URL + "/api/search";


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