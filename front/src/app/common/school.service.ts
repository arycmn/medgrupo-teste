import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ISchool } from '../interfaces/ISchool';

@Injectable({
  providedIn: 'root',
})
export class SchoolService {
  constructor() {}
  public makeSchool(formValues: NgForm): ISchool {
    const school = formValues.form.value;
    console.log(school)
    return {
      name: school.name,
      address: {
        street: school.street,
        number: school.number,
        city: school.city,
        state: school.state,
        zipcode: school.zipcode,
        complement: school.complement,
      },
      phone: school.phone,
      cnpj: school.cnpj,
      schoolYears: this.MakeschoolsYears(
        school.ensinoMedio,
        school.ensinoFundamental
      ),
      periods:this.MakeschoolsPeriods(
        school.periodoManha,
        school.periodoTarde,
        school.periodoNoite
      )
    };
  }

  private MakeschoolsYears = (
    ensinoMedio: boolean,
    ensinoFundamental: boolean
  ): ("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12")[] => {
    if (ensinoMedio && ensinoFundamental) {
      return ["1", "2", "3", "4", "5" , "6", "7", "8", "9", "10", "11", "12"];
    }
    if (ensinoMedio) {
      return ["10", "11", "12"];
    }
    if (ensinoFundamental) {
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
    }
    return [];
  };

  private MakeschoolsPeriods = (
    morning: boolean,
    afternoon: boolean,
    night: boolean
  ): ('night' | 'morning' | 'afternoon')[]|[]=>{
    const periods: ('night' | 'morning' | 'afternoon')[] = []
    if(morning) periods.push('morning');
    if(afternoon) periods.push('afternoon');
    if(night) periods.push('night');
    
    return periods
  }

}
