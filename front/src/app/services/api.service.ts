import { Injectable } from '@angular/core';
import { ISchool } from '../interfaces/ISchool';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiConfiguration } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) { }
  public getSchools$(): Observable<ISchool[]> {
    return this.http.get<ISchool[]>(`${ApiConfiguration.url}/schools?_embed=students&_embed=classes`);
  }

}
