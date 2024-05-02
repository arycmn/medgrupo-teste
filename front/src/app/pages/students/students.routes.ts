import { Routes } from "@angular/router";
import { StudentsComponent } from "./students.component";
import { FormStudentsComponent } from "../../components/form-students/form-students.component";

export const StudentsRoutes: Routes = [
    {
        path: '',
        component: StudentsComponent
    },
    {
        path: 'new',
        component: FormStudentsComponent
    }
]