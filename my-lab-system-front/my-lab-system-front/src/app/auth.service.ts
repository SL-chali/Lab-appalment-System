import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}
  
  private baseUrl = 'http://localhost:9000/';
  
  checkuser(): Observable<any> {

      const token = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        // Send GET request to your server to check user's authentication status
        return this.http.get<any>(`${this.baseUrl}auth/userdataget`, { headers });
      } else {
        return of({ error: 'No token found' }); // Return an observable with an error message
      }
  
  }

  register(userData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/signup`, userData);
  }

  login(email: any, password: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}auth/signin`, {email: email, password: password});
  }

  appointment(data: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Send GET request to your server to check user's authentication status
    return this.http.post<any>(`${this.baseUrl}appointment/schedule`,data, { headers });
  }
 
  appointmentlistget(): Observable<any> {
   
      const token = localStorage.getItem('token');
      if (token) {
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        // Send GET request to your server to fetch appointments for the given userId
        return this.http.get<any>(`${this.baseUrl}appointment/schedule-get-all`, { headers });
      } else {
        // Handle case where no token is present
        return of({ error: 'No token found' });
      }
   
  }
  
  
  appointmentemployeelistget(): Observable<any> {
   
    const token = localStorage.getItem('token');
    if (token) {
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      // Send GET request to your server to fetch appointments for the given userId
      return this.http.get<any>(`${this.baseUrl}appointment/schedule-get-all-to-employee`, { headers });
    } else {
      // Handle case where no token is present
      return of({ error: 'No token found' });
    }
 
}

  deleteAppointment(id: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Send GET request to your server to fetch appointments for the given userId
    return this.http.get<any>(`${this.baseUrl}appointment/scheduledelete?scheduleId=${id}`, { headers });
  }


  
  updateAprovalAppointment(id: any, approve: any): Observable<any> {
    const token = localStorage.getItem('token'); 
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    // Send GET request to your server to fetch appointments for the given userId
    return this.http.get<any>(`${this.baseUrl}appointment/scheduleapproveupdate?scheduleId=${id}&approve=${approve}`, { headers });
  }
}
