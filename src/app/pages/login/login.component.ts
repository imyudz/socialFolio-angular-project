import { Router } from '@angular/router';
import { AuthenticationResponse } from './../../services/models/AuthenticationResponse';
import { LoginRequest } from './../../services/models/LoginRequest';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  public get email(): FormControl<String | null> {
    return this.loginForm.controls.email;
  }

  public get password(): FormControl<String | null> {
    return this.loginForm.controls.password;
  }

  onSubmit() {
    console.log("teste");
    this.authService.login({email: this.email.value, password: this.password.value} as LoginRequest).subscribe({
      next: (response: AuthenticationResponse) => {
        console.log(response);
        if (response.token) {
          this.authService.setToken(response.token);
          this.authService.setLoggedIn(true);
          this.router.navigate(['/feed']);
        }
      },
      error: (error) => {
        console.error("Erro de login: ", error)
        error.status === 403 ?
          Swal.fire({
            text: "Email ou senha inválidos",
            title: "Errro ao fazer login",
            icon: "error",
          })
        :
          Swal.fire({
            text: "Um erro inesperado aconteceu",
            title: "ERRO: " + error.status,
            icon: "error",
          });
      }
    });
  }
}
