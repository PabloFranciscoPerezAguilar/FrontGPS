import { Component, OnInit, OnDestroy } from '@angular/core';
import {ApiService} from 'src/services/api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
  formLogin : FormGroup
  submited = false
  datas: any = []
  constructor(
    private formbuilder : FormBuilder,
    private api : ApiService,
    
    ) { 
      this.formLogin = this.formbuilder.group({
        username : ['', Validators.required],
        password : ['', Validators.required]
      })
     }

  ngOnInit() {
    
  }

  getLogin(){
    this.api.login(this.formLogin.value).subscribe(
      response => {
        this.datas = response.token
        localStorage.setItem('token', this.datas)
        console.log(localStorage.getItem('token'))
      }
    )
  }

  sendLogin(){
    this.submited = true;
    if(this.formLogin.invalid){
      console.log(this.formLogin.value)
      return;
    }
    this.getLogin()
  }

  
  ngOnDestroy(): void {
    
  }

  get f(){
    return this.formLogin.controls
  }


}
