
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { StartedComponent } from './started/started.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { EventsComponent } from './events/events.component';
import { TrainerComponent } from './trainer/trainer.component';
import { CoursesComponent } from './courses/courses.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';




const routes: Routes = [
  {path:"",component:LayoutComponent,children :[
    {path:"home",loadComponent:()=>import('./home/home.component').then((ts)=>ts.HomeComponent)},
    {path:"about",loadChildren:()=>import('./about/about-routing.module').then((ts)=>ts.AboutRoutingModule)},
    {path:"courses",component:CoursesComponent},
    {path:"trainer",component:TrainerComponent},
    {path:"events",component:EventsComponent},
    {path:"pricing",component:PricingComponent},
    {path:"contact",component:ContactComponent},
    {path:"started",component:StartedComponent},
    {path:"", pathMatch:'full',redirectTo:"home"}
  ]}
]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class usersModule { }
