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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule, MatDialogModule } from '@angular/material';
import { Alert } from './extra/alert.component';
import { NotFoundComponent } from './extra/notFound.component';
import { MiniLoadingComponent } from './extra/mini-loading.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'oauth2/redirect', component: RedirectHandler },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RedirectHandler,
    LoadingComponent,
    Alert,
    NotFoundComponent,
    MiniLoadingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatInputModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [AppService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor, multi: true
    }],
  bootstrap: [AppComponent],
  entryComponents: [Alert]
})
export class AppModule { }
