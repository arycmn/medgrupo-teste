import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrl: './schools.component.scss',
})
export class SchoolsComponent implements OnInit, OnDestroy {
  schools: any = [];

  constructor(public apiService: ApiService, public router: Router) {}

  onSchoolClick(school: any) {
    console.log("fui pressionado")
    const params = { schoolId: school.id };
    this.router.navigate(['app','classes'], { queryParams: params });
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
}
