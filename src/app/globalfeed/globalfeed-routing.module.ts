import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GlobalfeedComponent } from './components/globalfeed/globalfeed.component';

const routes: Routes = [

  {path : "feed", component : GlobalfeedComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GlobalfeedRoutingModule { }
