import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { SchoolsModule } from "../schools/schools.module";

export const HomeRoutes: Routes = [
    {
        path: '',
        component:HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'schools',
                pathMatch: 'full'
            },
            {
                path: 'schools',
                loadChildren: () => import('../schools/schools.module').then(m => m.SchoolsModule)
            },
            {
                path: 'classes',
                loadChildren: () => import('../classes/classes.module').then(m => m.ClassesModule)
            },
            {
                path: 'students',
                loadChildren: () => import('../students/students.module').then(m => m.StudentsModule)
            }
        ]
    },
]