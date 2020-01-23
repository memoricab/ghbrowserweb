import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { ACCESS_TOKEN } from '../app.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const authToken = localStorage.getItem(ACCESS_TOKEN);
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        return next.handle(authReq);
    }
}