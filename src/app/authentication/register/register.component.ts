import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AuthenticationService } from '../service/authentication.service';
import { JarwisService } from '../service/jarwis.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoadingOne: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private jarwis: JarwisService,
    private auth: AuthenticationService,
    private notification: NzNotificationService,
    private token: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isLoadingOne = true;
    this.jarwis.register(this.registerForm.value).subscribe(
      (data) => this.handleResponse(data),
      (error) => this.handleError(error)
    );
  }

  handleResponse(data: any) {
    if (data.isSuccessful) {
      this.notification.success('Registration', data.message);
      this.router.navigateByUrl('login').then(() => {
        window.location.reload();
      });
    } else {
      this.notification.error('Login', data.error);
    }
  }
  handleError(error: any) {
    this.isLoadingOne = false;
    error = this.notification.error('Login', error.error.Error);
  }
}
