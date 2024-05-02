import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ISchool } from '../../interfaces/ISchool';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';
import { ClassService } from '../../common/class.service';
import { IClass } from '../../interfaces/IClass';

@Component({
  selector: 'app-form-class',
  templateUrl: './form-class.component.html',
  styleUrl: './form-class.component.scss',
})
export class FormClassComponent implements OnInit, OnDestroy {
  constructor(
    private apiService: ApiService,
    private router: Router,
    private classService: ClassService
  ) {}

  selectedSchoolId: string = '';
  schools: ISchool[] = [];
  SchoolYears: (1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12)[] = [];
  periods: ('night' | 'morning' | 'afternoon')[] = [];
  classes: IClass[] = [];

  refactorClassLabel(year: number) {
    return this.classService.makeOptionsForSchoolYear(year);
  }

  refactorPeriodLabel(period: 'night' | 'morning' | 'afternoon') {
    return this.classService.makeOptionsForPeriod(period);
  }

  onChangeSchool(schoolId: string) {
    this.selectedSchoolId = schoolId;
    this.subs.push(
      this.apiService
        .getSchoolsbyId$(this.selectedSchoolId)
        .subscribe((schools) => {
          this.SchoolYears = schools.schoolYears;
          this.periods = schools.periods;
          this.classes = schools.classes || [];
        })
    );
  }

  subs: Subscription[] = [];

  ngOnInit(): void {
    this.subs.push(
      this.apiService.getSchools$().subscribe((schools) => {
        this.schools = schools;
      })
    );
  }
  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }
  onSubmit(formValues: NgForm) {
   this.subs.push( this.apiService.postClass$(this.classService.makeClass(formValues, this.classes)).subscribe(() => {
      this.router.navigate(['/app']);
    }))

  }

  cancel() {
    this.router.navigate(['/app']);
  }
}
