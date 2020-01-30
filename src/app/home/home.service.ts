import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HomeService {


    constructor(private http: HttpClient) {
        this.getUserData();
    }

    getUserData() {
        return this.http.get<User>(environment.USER_API, { observe: 'response' });
    }

    getSearchUserData(username) {
        return this.http.get<User>(environment.SEARCH_USER_API + "?username=" + username, { observe: 'response' });
    }

    getAutoCompleteList(query) {
        return this.http.get(environment.SEARCH_USER_API + "/?autoCompleteQuery=" + query);

    }
}

export interface User {
    location: string,
    gitRepos: [],
    avatar_url: string,
    login: string,
    bio: string,
    followers: number,
    following: number,
    public_repos: number,
    name: string

}

export interface UserRepository {
    name: string;
    full_name: string;
    html_url: string;
}