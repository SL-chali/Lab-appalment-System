import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { HttpClientModule } from '@angular/common/http';
import { UserhomepageComponent } from './homepages/userhomepage/userhomepage.component';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { HttpClient } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { employeehomepageComponent } from './homepages/employeehomepage/employeehomepage.component';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent,
    UserhomepageComponent,
    employeehomepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // Add FormsModule here
    AppRoutingModule,
    HttpClientModule,
    ToastModule,
    TabViewModule,
    BrowserAnimationsModule ,
    DialogModule,
    AccordionModule,
    TableModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
