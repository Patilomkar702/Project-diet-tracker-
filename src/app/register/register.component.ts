import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
 
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    name: ['', Validators.required],
    password: ['', Validators.required],
    email: ['', Validators.required],
    mobile: ['', Validators.required],
    weight: ['', Validators.required],
    height: ['', Validators.required],
    age: ['', Validators.required],
    
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async registerHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:5200/insert';

    let result: any = await this.http.post(url,data).toPromise();
    if (result.opr) {
      this.router.navigate(['/login']);

    } else {
      this.uiInvalidCredential = true;
    }
  }
}
