import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { tap } from 'rxjs/internal/operators/tap';
import { catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Alert } from '../extra/alert.component';
import { MatDialog } from '@angular/material';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private router: Router, public alert: MatDialog) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = localStorage.getItem(environment.ACCESS_TOKEN);
        const authReq = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        next: HttpHandler

        return next.handle(authReq).pipe(
            tap(evt => { }),
            catchError((err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.error.status === 404) {
                        return throwError(err);
                    }
                    if (err.error.status === 401) {
                        this.router.navigateByUrl("/login");
                    }
                    if (err.error.status === 500) {
                        this.alert.open(Alert, {
                            width: '250px',
                            data: { message: "Something bad happened.", title: "Error" }
                        });
                    }
                }
                return of(err);
            }));
    }
}