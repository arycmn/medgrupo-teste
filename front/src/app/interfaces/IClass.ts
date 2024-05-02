import { IStudent } from "./IStudent"

export interface IClass {
    id?: string,
    variant: string,
    schoolYear: number,
    period: 'night' | 'morning' | 'afternoon',
    schoolId: string
    students?: IStudent[]
  }