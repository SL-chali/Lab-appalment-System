import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
@Component({
  selector: 'app-employeehomepage',
  templateUrl: './employeehomepage.component.html',
  styleUrl: './employeehomepage.component.css'
})
export class employeehomepageComponent {
   
  appointments: any[]=[];
  pendingAppointments: any[]=[];

  
  deleteloading: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getAppointmentdata();
  }


  getAppointmentdata(): void {

    this.authService.appointmentemployeelistget().subscribe(
      (response: any) => {
        this.appointments = response;
        this.pendingAppointments = this.appointments.filter(appointment => appointment.approve === 0);

      },
      (error) => {
        console.error(error); // Log the error
  
      }
    );
  }


  deleteAppointment(id: number) {
    this.deleteloading = true;
    this.authService.deleteAppointment(id).subscribe(
      (response) => {
    
        console.log('Appointment deleted successfully:', response);
        this.deleteloading = false;
      },
      (error) => {
        console.error('Error deleting appointment:', error);
        this.deleteloading = false;
      }
    );
  }

  updateAprovalAppointment(id: number, approve:number) {

    this.authService.updateAprovalAppointment(id, approve).subscribe(
      (response) => {
        console.log('Appointment update successfully:', response);
      },
      (error) => {
        console.error('Error update appointment:', error);
      }
    );
  }
}
