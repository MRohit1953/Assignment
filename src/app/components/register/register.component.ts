import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  
})
export class RegisterComponent implements OnInit {
  registerForm: any;

  constructor(){ }

  ngOnInit():void {

      var registerForm = new FormGroup({
      firstName: new FormControl(""),
      lastName: new FormControl(""),
      mobile: new FormControl(""),
      address: new FormControl("")
    });
  }
  registerSubmitted(){
    console.log(this.registerForm.value);
  }
}
