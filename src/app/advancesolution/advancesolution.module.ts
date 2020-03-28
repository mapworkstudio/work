import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceSolutionRoutingModule } from './advancesolution.routing.module';
import { TechnologyComponent } from './technology/technology.component';
import { IndustriesComponent } from './industries/industries.component';
import { AdvancesolutionComponent } from './advancesolution.component';

@NgModule({
    declarations: [
        AdvancesolutionComponent,
        TechnologyComponent,
        IndustriesComponent
    ],
    imports: [
      CommonModule,
      AdvanceSolutionRoutingModule,
    ]
  })
  export class AdvanceSolutionModule {
  }