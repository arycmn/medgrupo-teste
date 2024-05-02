import { Routes } from "@angular/router";
import { ClassesComponent } from "./classes.component";
import { FormClassComponent } from "../../components/form-class/form-class.component";

export const ClassesRoutes : Routes= [
    {
        path: '',
        component: ClassesComponent
    },
    {
        path: 'new',
        component: FormClassComponent
    }
    
]