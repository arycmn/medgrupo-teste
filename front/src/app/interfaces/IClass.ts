export interface ISchool {
    id?: string,
    variant: string,
    schoolYear: number,
    period: 'night' | 'morning' | 'afternoon',
    schoolId: string
  }