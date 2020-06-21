
import { NgModule } from "@angular/core";
import {RouterModule, Routes} from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { ListComponent } from "./list/list.component";
import { LogoutComponent } from "./logout/logout.component";
import { ArchiveComponent } from "./archive/archive.component";
const appRoutes:Routes=[
    {
        path:'', component:SignInComponent
    },
   {
       path:'signup', component:SignUpComponent
   },
   {
       path:'signin',component:SignInComponent
   },
   {
       path:'list',component:ListComponent
   },
   {
    path:'logout',component:LogoutComponent
},
{
    path:'archive',component:ArchiveComponent
}
]
@NgModule(
    {
        imports:[RouterModule.forRoot(appRoutes)],
        exports:[RouterModule]

    }
)
export class AppRouting{

}