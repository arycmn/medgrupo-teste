export interface IStudent {
    id?: string;
    name: string;
    age: number;
    phone: number;
    address: {
      street: string;
      number: number;
      city: string;
      state: string;
      zipcode: number
    };
    email: string;
    schoolId:string;
    classId: string;
  }