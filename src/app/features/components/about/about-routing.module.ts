
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { TaponeComponent } from './tapone/tapone.component';
import { TaptwoComponent } from './taptwo/taptwo.component';
import { TapthreeComponent } from './tapthree/tapthree.component';
import { AboutComponent } from './about.component';


const routes: Routes = [
      {
      path:"",component:AboutComponent, children:[
        {path:"tap1",component:TaponeComponent},
        {path:"tap2",component:TaptwoComponent},
        {path:"tap3",component:TapthreeComponent},
        {path:"",pathMatch:"full",redirectTo:"/user/about/tap1"},
      ]
    }

]

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class AboutRoutingModule { }
