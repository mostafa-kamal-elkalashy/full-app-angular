
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AdminLayoutComponent } from './main-admin/admin-layout.component';
import { HomeComponent } from './home/home.component';
import { ListCoursesComponent } from './pages/courses/list-courses/list-courses.component';
import { CreatCoursesComponent } from './pages/courses/creat-courses/creat-courses.component';
import { UpdateCoursesComponent } from './pages/courses/update-courses/update-courses.component';
import { LestTrainersComponent } from './pages/trainers/lest-trainers/lest-trainers.component';
import { CreateTrainersComponent } from './pages/trainers/create-trainers/create-trainers.component';
import { UpdateTrainersComponent } from './pages/trainers/update-trainers/update-trainers.component';
import { RegistersComponent } from './users/registers/registers.component';
import { register } from 'swiper/element';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [


  {path:"",component:AdminLayoutComponent,children:[
    {path:"home",component:HomeComponent},
    {path:"lc",component:ListCoursesComponent},
    {path:"cc",component:CreatCoursesComponent},
    {path:"uc/:id",component:UpdateCoursesComponent},
    {path:"lt",component:LestTrainersComponent},
    {path:"ct",component:CreateTrainersComponent},
    {path:"ut/:id",component:UpdateTrainersComponent},
    {path:"home", component:HomeComponent},
    {path:"register",component:RegistersComponent},
    {path:"login",component:LoginComponent},
    {path:"", pathMatch:'full',redirectTo:"login"}
  ]}


]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AdminModule { }
