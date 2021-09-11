import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(
    private authentication: AuthService, 
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.formGroup = new FormGroup({
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  loginProcess(){
    if(this.formGroup.valid){
      this.authentication.login(this.formGroup.value)
      .subscribe(result=>{
        this.authentication.token = result.token;
        this.router.navigate(['/clients']);
      })
    }
  }
}
