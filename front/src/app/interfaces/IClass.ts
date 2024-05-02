import { IStudent } from "./IStudent"

export interface IClass {
    id?: string,
    variant: string,
    schoolYear: string,
    period: 'night' | 'morning' | 'afternoon',
    schoolId: string | number,
    students?: IStudent[]
  }