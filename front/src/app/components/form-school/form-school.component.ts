import { Component, OnDestroy } from '@angular/core';
import { ISchool } from '../../interfaces/ISchool';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { SchoolService } from '../../common/school.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-school',
  templateUrl: './form-school.component.html',
  styleUrl: './form-school.component.scss'
})
export class FormSchoolComponent implements OnDestroy {

  constructor(
    private apiService: ApiService,
    private schoolService: SchoolService,
    private router: Router
  ) {}

  subs: Subscription[] = [];

  onSubmit(values: NgForm) {
    this.subs.push(
      this.apiService.postSchool$(this.schoolService.makeSchool(values)).subscribe(() => {
        this.router.navigate(['/app'])
      })
    )
  }

  cancel() {
    this.router.navigate(['/app'])
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe());
  }

}
