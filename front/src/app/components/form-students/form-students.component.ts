import { StudentsService } from './../../common/students.service';
import { NgForm } from '@angular/forms';
import { IStudent } from './../../interfaces/IStudent';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { ISchool } from '../../interfaces/ISchool';
import { IClass } from '../../interfaces/IClass';
import { ClassService } from '../../common/class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-students',
  templateUrl: './form-students.component.html',
  styleUrl: './form-students.component.scss',
})
export class FormStudentsComponent implements OnInit, OnDestroy {
  constructor(
    private apiService: ApiService,
    private StudentsService: StudentsService,
    private classService: ClassService,
    private router: Router
  ) {}

  schools: ISchool[] = [];
  classes: IClass[] = [];
  selectedSchoolId: string | null = null;
  selectedClassId: string | null = null;
  selectedPeriod: 'morning' | 'afternoon' | 'night' | '' = '';

  subs: Subscription[] = [];

  ngOnInit(): void {}

  refactorClassLabel(variant: string, schoolYear: number) {
    
    return `${this.classService.makeOptionsForSchoolYear(schoolYear)} - ${variant}`;
  }

  onChangeSchool(schoolId: string) {
    this.selectedSchoolId = schoolId;
    this.selectedClassId = null;
    this.subs.push(
      this.apiService.getClassesbySchoolIdandPeriod$(schoolId, this.selectedPeriod).subscribe((classes) => {
        this.classes = classes;
      })
    )
  }

  onChangePeriod(period: 'morning' | 'afternoon' | 'night') {
    this.selectedPeriod = period;
    this.selectedSchoolId = null;
    this.selectedClassId = null;
    this.classes = [];
    this.schools
    this.subs.push(
      this.apiService.getSchools$().subscribe((schools) => {
        this.schools = this.StudentsService.filterSchoolsByPeriod(
          schools,
          period
        );
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  onSubmit(formValue: NgForm) {
   this.subs.push( this.apiService.postStudent$(this.StudentsService.createStudent(formValue)).subscribe(() => {
      this.router.navigate(['/app']);
   }))
  }

  cancel() {
    this.router.navigate(['/app']);
  }
}
