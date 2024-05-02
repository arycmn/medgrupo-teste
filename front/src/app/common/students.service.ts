import { Injectable } from '@angular/core';
import { IClass } from '../interfaces/IClass';
import { NgForm } from '@angular/forms';
import { IStudent } from '../interfaces/IStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  public createStudent(student: NgForm): IStudent {
    const values = student.form.value;

    return {
      name: values.name,
      birthdate: values.birthdate,
      phone: values.phone,
      address: {
        street: values.street,
        number: values.number,
        city: values.city,
        state: values.state,
        zipcode: values.zipcode,
      },
      email: values.email,
      schoolId: parseInt(values.school),
      classId: parseInt(values.class),
    };
  }

  public filterSchoolsByPeriod(schools: any[], period: string) {
    console.log(schools, period);
    return schools.filter((school) =>
      school.classes?.some((c: IClass) => c.period === period)
    );
  }

  public calculateAge(dataNascimento: string) {
    console.log(dataNascimento);
    const hoje: number = new Date().getTime();
    const diferencaEmMs: number = hoje - new Date(dataNascimento).getTime();

    const diferencaEmDias = Math.floor(diferencaEmMs / (1000 * 60 * 60 * 24));

    const idade = Math.floor(diferencaEmDias / 365.25);

    return idade;
  }
}
