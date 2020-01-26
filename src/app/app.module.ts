import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, RedirectHandler } from './app.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppService } from './app.service';
import { HomeComponent } from './home/home.component';
import { AuthInterceptor } from './http-interceptors/auth-interceptor';
import { LoadingComponent } from './extra/loading.component';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'oauth2/redirect', component: RedirectHandler }
  //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RedirectHandler,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
