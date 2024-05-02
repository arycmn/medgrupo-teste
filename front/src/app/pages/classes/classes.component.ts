import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrowserService } from '../../common/browser.service';
import { Router } from '@angular/router';
import { IClass } from '../../interfaces/IClass';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { ClassService } from '../../common/class.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrl: './classes.component.scss',
})
export class ClassesComponent implements OnInit, OnDestroy {
  constructor(
    private browserService: BrowserService,
    private router: Router,
    private apiService: ApiService,
    private classService: ClassService
  ) {}

  schoolId: string = '';
  classes: IClass[] = [];
  subs: Subscription[] = [];

  convertPeriod = (period: 'night' | 'morning' | 'afternoon') => {
    return this.classService.makeOptionsForPeriod(period);
  }

  convertSchoolYear = (schoolYear: number) => {
    
    return this.classService.makeOptionsForSchoolYear(schoolYear);

  }

  onClassClick = (classData: IClass) => {
    const params = {classId: classData.id };
    this.router.navigate(['app', 'students'], { queryParams: params });
  }


  private get schoolIdFromParams(): string {
    const schoolId = this.browserService.getParams().get('schoolId');
    return schoolId ? schoolId.replaceAll('"', '') : '';
  }

  getClasses = () => {
    this.subs.push(
      this.apiService.getClasses$(this.schoolId).subscribe((classes) => {
        this.classes = classes;
      })
    );
  };

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

  ngOnInit(): void {
    this.schoolId = this.schoolIdFromParams;
    console.log(this.schoolId);

    if (!!this.schoolId) {
      this.getClasses();
    } else {
      this.router.navigate(['/app']);
    }
  }
}
