import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IClass } from '../interfaces/IClass';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  constructor() {}

  public makeOptionsForSchoolYear(schoolYear: string): string {
    switch (schoolYear) {
      case "10":
        return '1o EM';
      case "11":
        return '2o EM';
      case "12":
        return '3o EM';
      default:
        return `${schoolYear}o EF`;
    }
  }

  public makeOptionsForPeriod(
    period: 'night' | 'morning' | 'afternoon'
  ): string {
    switch (period) {
      case 'night':
        return 'Noite';
      case 'morning':
        return 'Manhã';
      case 'afternoon':
        return 'Tarde';
    }
  }

  public getLastClass(classes: IClass[], SchoolYear: string): string {
    console.log(classes, SchoolYear)
    const ordenedClasses = classes
      .filter((c) => (c.schoolYear) === SchoolYear)
      .sort((a, b) => b.variant.charCodeAt(0) - a.variant.charCodeAt(0));

      console.log(ordenedClasses);
    return ordenedClasses.length > 0 ? String.fromCharCode(ordenedClasses[0].variant.charCodeAt(0)+1) : 'A';
  }

  public makeClass(formValues: NgForm, classes: IClass[]): IClass {
    const classData = formValues.form.value;
    return {
      variant: this.getLastClass(classes, String(classData.schoolYear)),
      schoolYear: classData.schoolYear,
      period: classData.period,
      schoolId: parseInt(classData.school),
    };
  }
}
