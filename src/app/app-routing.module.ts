import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvancesolutionComponent } from './advancesolution/advancesolution.component';
import { HomeComponent } from './home/home.component';
import { OurproductComponent } from './ourproduct/ourproduct.component';
import { ManagedserviceComponent } from './managedservice/managedservice.component';
import { CompanyComponent } from './company/company.component';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Advancesolution', component: AdvancesolutionComponent},
  {path: 'OurProductComponent', component: OurproductComponent},
  {path: 'ManagedServiceComponent', component: ManagedserviceComponent},
  {path: 'CompanyComponent', component: CompanyComponent},
  {path: 'CareerComponent', component: CareerComponent},
  {path: 'ContactusComponent', component: ContactusComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AdvancesolutionComponent,
    HomeComponent,
    OurproductComponent,
    ManagedserviceComponent,
    CompanyComponent,
    CareerComponent,
    ContactusComponent
],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
