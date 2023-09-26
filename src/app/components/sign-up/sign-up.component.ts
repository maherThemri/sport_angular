import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MustMatch } from 'src/app/shared/mustMatch';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signupForm!: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group(
      {
        firstName: ["", [Validators.minLength(3), Validators.required]],
        lastName: ["", [Validators.minLength(3), Validators.required]],
        email: ["", [Validators.email, Validators.required]],
        password: ["", [Validators.minLength(3), Validators.required]],
        cpassword: [""],
      },


    )
  }



  signup() {
    console.log("here signup", this.signupForm.valid);

    if (!this.signupForm.invalid) {
      console.log("here signup ok", this.signupForm.value);
      this.signupForm.value.roles = ["admin"];
      this.userService.signup(this.signupForm.value).subscribe((data) => {
        this.router.navigate(["login"]);
      });
    }
  }
}


