import { ApiService } from './../../services/api.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IStudent } from '../../interfaces/IStudent';
import { BrowserService } from '../../common/browser.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentsService } from '../../common/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit, OnDestroy {

  constructor(
    private browserService: BrowserService,
    private apiservice: ApiService,
    private router: Router,
    private studentsService : StudentsService
  ) {}
  classId: string = ''

  subs: Subscription[] = []

  private get classIdFromParams(): string {
    const classId = this.browserService.getParams().get('classId')
    return classId ? classId.replaceAll('"', '') : ''
  }

  calculateAge = (birthdate: string) => {
    if (!birthdate) return 0
    return this.studentsService.calculateAge(birthdate)
  }

  getStudents = () => {
    this.apiservice.getStudents$(this.classId).subscribe((students) => {
      this.students = students
    })
  }

  ngOnInit(): void {
    this.classId = this.classIdFromParams
    if(!!this.classId){
      this.getStudents()
    } else{
      this.router.navigate(['/app'])
    }
  }

  ngOnDestroy(): void {
    this.subs.forEach((sub) => sub.unsubscribe())
  }


  students : IStudent[] = []

}
