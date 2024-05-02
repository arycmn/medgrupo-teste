import { TestBed } from '@angular/core/testing';

import { SchoolService } from './school.service';
import { NgForm } from '@angular/forms';

describe('SchoolService', () => {
  let service: SchoolService;
  let formValues: NgForm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SchoolService);
    service = new SchoolService();
    formValues = {
      form: {
        value: {
          name: 'Test School',
          street: 'Test Street',
          number: 123,
          city: 'Test City',
          state: 'Test State',
          zipcode: 12345,
          complement: 'Test Complement',
          phone: '1234567890',
          cnpj: '12345678901234',
          ensinoMedio: true,
          ensinoFundamental: false,
          periodoManha: true,
          periodoTarde: false,
          periodoNoite: false,
        },
      },
    } as NgForm;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create a school object with correct properties', () => {
    const school = service.makeSchool(formValues);

    expect(school.name).toBe('Test School');
    expect(school.address.street).toBe('Test Street');
    expect(school.address.number).toBe(123);
    expect(school.address.city).toBe('Test City');
    expect(school.address.state).toBe('Test State');
    expect(school.address.zipcode).toBe("12345");
    expect(school.address.complement).toBe('Test Complement');
    expect(school.phone).toBe(1234567890);
    expect(school.cnpj).toBe(12345678901234);
    expect(school.schoolYears).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
    expect(school.periods).toEqual(['morning']);
  });

  it('should return an empty schoolYears array if ensinoMedio and ensinoFundamental are false', () => {
    formValues.form.value.ensinoMedio = false;
    formValues.form.value.ensinoFundamental = false;

    const school = service.makeSchool(formValues);

    expect(school.schoolYears).toEqual([]);
  });

  it('should return an empty periods array if all periods are false', () => {
    formValues.form.value.periodoManha = false;
    formValues.form.value.periodoTarde = false;
    formValues.form.value.periodoNoite = false;

    const school = service.makeSchool(formValues);

    expect(school.periods).toEqual([]);
  });
});
