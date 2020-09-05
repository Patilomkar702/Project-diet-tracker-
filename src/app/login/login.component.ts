import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { getLocaleMonthNames } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public uiInvalidCredential =false;

  public fbFormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async loginProcessHere() {
    const data = this.fbFormGroup.value;

    const url = 'http://localhost:5200/check';
    const result: any = await this.http.post(url, data).toPromise();
    localStorage.setItem('name',result.user.NAME);
    localStorage.setItem('password',result.user.PASSWORD);
    localStorage.setItem('age',result.user.AGE);
    localStorage.setItem('mobile',result.user.MOBILE);
    localStorage.setItem('weight',result.user.WEIGHT);
    localStorage.setItem('height',result.user.HEIGHT);

    if (result.opr) {
      localStorage.setItem('sid','true');
      this.router.navigate(['home']);
      
    } else {
      this.uiInvalidCredential = true;
    }
  }
}
