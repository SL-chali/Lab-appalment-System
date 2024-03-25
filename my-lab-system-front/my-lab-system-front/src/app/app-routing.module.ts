import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component'; 
import { RegisterpageComponent } from './registerpage/registerpage.component'; 
import { UserhomepageComponent } from './homepages/userhomepage/userhomepage.component';
import { employeehomepageComponent } from './homepages/employeehomepage/employeehomepage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page by default
  { path: 'login', component: LoginpageComponent },
  { path: 'register', component: RegisterpageComponent },
  { path: 'userhomepage', component: UserhomepageComponent },
  { path: 'employeehomepage', component: employeehomepageComponent }
  // Define other routes here
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
