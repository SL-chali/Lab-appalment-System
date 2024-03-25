import { ComponentFixture, TestBed } from '@angular/core/testing';

import { employeehomepageComponent } from './employeehomepage.component';

describe('employeehomepageComponent', () => {
  let component: employeehomepageComponent;
  let fixture: ComponentFixture<employeehomepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [employeehomepageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(employeehomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
