import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-userhomepage',
  templateUrl: './userhomepage.component.html',
  styleUrl: './userhomepage.component.css'
})
export class UserhomepageComponent {
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.checkAuthentication();
  }

  checkAuthentication() {
 
      this.authService.checkuser().subscribe(
        (response) => {
          if (response.statusCode != 200) {
            window.location.href = '/';
          }
        },
        (error) => {
          window.location.href = '/';
        }
      );
  }
  

  
  loading: boolean = false;


  onSubmit(appointmentForm: any): void {
 
    if (appointmentForm.valid) {
      this.loading = true;
      appointmentForm.value.approve = 0;
      appointmentForm.value.userId = 23;
      console.log(appointmentForm.value);
      this.authService.appointment(appointmentForm.value).subscribe(
        (response) => {
          
          if(response.statusCode == 200){
            setTimeout(() => {
              this.loading = false;
    
          }, 3000);
          }else{
            setTimeout(() => {
              this.loading = false;
          }, 3000);
          }
        },
        (error) => {
          this.loading = false;
        }
      );
    }else{
 
    }
  }

}
