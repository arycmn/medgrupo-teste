import { Injectable } from '@angular/core';
import { ISchool } from '../interfaces/ISchool';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfiguration } from '../../environments/environment.development';
import { IClass } from '../interfaces/IClass';
import { IStudent } from '../interfaces/IStudent';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  public getSchools$(): Observable<ISchool[]> {
    return this.http.get<ISchool[]>(`${ApiConfiguration.url}/schools?_embed=students&_embed=classes`);
  }

  public getSchoolsbyId$(schoolId: string): Observable<ISchool> {
    return this.http.get<ISchool>(`${ApiConfiguration.url}/schools/${schoolId}?_embed=classes`);
  }

  public postSchool$(school: ISchool): Observable<ISchool> {
    return this.http.post<ISchool>(`${ApiConfiguration.url}/schools`, school)
  }

  public getClasses$(schoolId: string): Observable<IClass[]> {
    return this.http.get<IClass[]>(`${ApiConfiguration.url}/classes?_embed=students&schoolId=${schoolId}`);
  }

  public getClassesbySchoolIdandPeriod$(schoolId: string, period: string): Observable<IClass[]> {
    return this.http.get<IClass[]>(`${ApiConfiguration.url}/classes?schoolId=${schoolId}&period=${period}`); ;
  }

  public postClass$(classData: IClass): Observable<IClass> {
    return this.http.post<IClass>(`${ApiConfiguration.url}/classes`, classData)
  }

  public getStudents$(classId: string): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${ApiConfiguration.url}/students?_embed=classes&classId=${classId}`);
  }

  public postStudent$(student: IStudent): Observable<IStudent> {
    return this.http.post<IStudent>(`${ApiConfiguration.url}/students`, student)
  }

}
