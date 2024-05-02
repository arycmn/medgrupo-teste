import { IClass } from "./IClass"
import { IStudent } from "./IStudent"

export interface ISchool {
  id?: string
  name: string
  address: {
    street: string
    number: number
    city: string
    state: string
    complement: string
    zipcode: string
  }
  phone: number
  cnpj: number
  schoolYears: ("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12")[] | []
  periods: ('night' | 'morning' | 'afternoon')[] | []
  classes?: IClass[],
  students?: IStudent[]
}
