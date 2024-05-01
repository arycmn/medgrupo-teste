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
                loadChildren: () => import('../schools/schools.module').then(m => m.SchoolsModule)
            }
        ]
    },
]