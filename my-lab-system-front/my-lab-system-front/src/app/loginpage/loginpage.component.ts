import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrl: './loginpage.component.css'
})
export class LoginpageComponent {
   
  email!: any;
  password!: any;
  isLoading:boolean = false;
  message: string = '';
  messageshow: boolean = false;

  constructor(private authService: AuthService) { }

  login() {
    if (!this.email || !this.password) {
      this.messageshow = true;
      this.message = 'Please fill in all the fields.';
      setTimeout(() => {
        this.messageshow = false;
        this.message = '';
      }, 3000);
      
      return;
    }
   this.isLoading = true;
    this.authService.login(this.email, this.password).subscribe(
      (response) => {

        if(response.statusCode == 200){
          const token = response.token;
          this.messageshow = true;
          this.message = 'Login successful';
          setTimeout(() => {
            this.messageshow = false;
            this.message = '';
            this.isLoading = false;
            console.log('Login successful:', response);
            
            // Storing token in local storage
            localStorage.setItem('token', token);
            if(response.role == 'user'){
              window.location.href = '/userhomepage';
            }else if(response.role == 'employee'){
              window.location.href = '/employeehomepage';
            }
          }, 3000);
          
      }else{
        this.messageshow = true;
        this.message = 'Bad credentials';
        setTimeout(() => {
          this.messageshow = false;
          this.message = '';
          this.isLoading = false;
          console.log('Bad credentials');
        }, 3000);
      }
      },
      (error) => {
        this.messageshow = true;
        this.message = 'Login failed';
        setTimeout(() => {
          this.messageshow = false;
          this.message = '';
          this.isLoading = false;
          console.log('Login failed:', error);
        }, 3000);
      }
    );
  }

}
