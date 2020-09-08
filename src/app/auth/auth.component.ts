import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService, AuthResponseData } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: "app-auth",
    templateUrl: "./auth.component.html"
})
export class AuthComponent {
    isLogInMode: Boolean = true;
    isLoading: Boolean = false;
    error: string = null;

    constructor(private authService: AuthService, private router: Router) { }

    onSwitchMode() {
        this.isLogInMode = !this.isLogInMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid) return;

        const email = form.value.email;
        const password = form.value.password;

        let authObs: Observable<AuthResponseData>;

        this.isLoading = true;
        if (this.isLogInMode) {
            authObs = this.authService.login(email, password);
        } else {
            authObs = this.authService.signup(email, password);
        }

        authObs.subscribe( resData=> {
            this.router.navigate(['/recipes']);
            this.isLoading = false;
        },
        errorRes => {
            this.isLoading = false;
            this.error = errorRes;
        });

        form.reset();
    }

    onHandleError() {
        this.error = null;
    }
}