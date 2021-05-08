import { LoadingService } from './../../../core/services/loading.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../../core/services/auth.service';
import { Component, Inject, OnInit } from '@angular/core';
import { generateModel } from 'src/core/utils/utilities';
import { DOCUMENT } from '@angular/common';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private loadingService: LoadingService,
    private router: Router
  ) {}

  errorMsg = '';
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  year = new Date().getFullYear();

  login() {
    this.loadingService.show();
    this.errorMsg = '';

    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    this.authService
      .login(generateModel(this.loginForm))
      .pipe(finalize(() => this.loadingService.hide()))
      .subscribe((res) => {
        if (!res.result) {
          this.errorMsg = res.message;
        }
      });
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnInit() {
    if (this.authService.currentUserValue) {
      this.router.navigate(['/users']);
    }
  }
}
