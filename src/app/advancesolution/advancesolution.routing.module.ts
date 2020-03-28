import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { AdvancesolutionComponent } from './advancesolution.component';
import { IndustriesComponent } from './industries/industries.component';

const routes: Routes = [
    {
      path: '', component: AdvancesolutionComponent, children: [
        {
          path: 'Technology', component: TechnologyComponent
        },
        {
            path: 'Industries', component: IndustriesComponent
        }
      ]
    }
  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AdvanceSolutionRoutingModule { }