import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginPage: FormGroup;
  email = new FormControl('');
  mdp = new FormControl('');

  loggedIn = false; 
  loginSuccess = false;
  
  constructor(private router: Router) { 
    this.loginPage = new FormGroup({
      email : this.email,
      mdp : this.mdp
    })
  }

  ngOnInit(): void {
    
  }

  loginUser(e) {
    e.preventDefault();
    if (this.email.value == "admin@admin.fr" && this.mdp.value == "admin")
    {
      this.loginSuccess = true;
      this.loggedIn = true;
      this.router.navigate(["/affichageFilms"])

    }
    else if (this.email.value == "" || this.mdp.value == "")
    {
      this.loginSuccess = false;
      alert("Tes champs sont vides, tu louches ?");
      
    }
    else 
    {
      this.loginSuccess = false;
    }

  }

  get invalidLogin() : any {
    return {
      'visibility' : this.loginSuccess? 'hidden' : 'visible'
    };
  }
}