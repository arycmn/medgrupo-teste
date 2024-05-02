export interface IStudent {
    id?: string;
    name: string;
    birthdate: string;
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