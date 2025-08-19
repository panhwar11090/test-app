import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [FormsModule, NgIf],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';
  isError: boolean = false;

  onLogin() {
    if (this.username === 'huzaifa' && this.password === 'huzaifa123') {
      this.message = '✅ Login successful! Password is correct.';
      this.isError = false;
    } else {
      this.message = '❌ Invalid username or password!';
      this.isError = true;
    }
  }
}
