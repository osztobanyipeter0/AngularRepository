import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Minden mezőt ki kell tölteni!';
      return;
    }

    this.authService.login(this.username, this.password).subscribe(
      response => {
        this.authService.setUsername(this.username);
        this.authService.setUserId(response.userId);
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  register() {
    if (!this.username || !this.password) {
      this.errorMessage = 'Minden mezőt ki kell tölteni!';
      return;
    }

    this.authService.register(this.username, this.password).subscribe(
      response => {
        this.authService.setUsername(this.username);
        this.authService.setUserId(response.userId);
        this.router.navigate(['/home']);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }
}
