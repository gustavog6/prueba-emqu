import { Component, OnInit } from '@angular/core';
import { FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
        `,
    ],
})
export class LoginComponent implements OnInit {
    password!: string;

    fgCredentials!: UntypedFormGroup;

    constructor(
        public layoutService: LayoutService,
        private _formBuilder: FormBuilder,
        private route: Router,
        private loginService: LoginService
    ) {}

    ngOnInit() {
        this.fgCredentials = this._formBuilder.group({
            email: [
                'admin@mail.com',
                this._formBuilder.nonNullable,
                Validators.required,
            ],
            password: [
                'admin',
                this._formBuilder.nonNullable,
                Validators.required,
            ],
        });
    }

    login() {
        const credentials = this.fgCredentials.value;

        if (this.loginService.login(credentials.email, credentials.password)) {
            this.route.navigate(['/']);
        }
    }
}
