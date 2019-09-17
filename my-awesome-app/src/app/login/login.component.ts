import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'cinv-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private fromUrl: string;
  public loginForm: FormGroup;


  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   userName: [''],
    //   password: ['']
    // });
  }
  
  public login():void{
    alert('Login');
    
    // const userName = this.loginForm.get('userName').value;
    // const password = this.loginForm.get('password').value;
  }

}
