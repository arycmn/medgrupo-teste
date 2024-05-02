import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSchoolComponent } from './form-school.component';

describe('FormSchoolComponent', () => {
  let component: FormSchoolComponent;
  let fixture: ComponentFixture<FormSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
