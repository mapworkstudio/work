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
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { InnerPageHeaderComponent } from './inner-page-header/inner-page-header.component';
import { NewsComponent } from './news/news.component';



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Advancesolution', component: AdvancesolutionComponent},
  {path: 'OurProduct', component: OurproductComponent},
  {path: 'ManagedService', component: ManagedserviceComponent},
  {path: 'Company', component: CompanyComponent},
  {path: 'Career', component: CareerComponent},
  {path: 'Contactus', component: ContactusComponent},
  {path: 'news', component: NewsComponent},
  { path: '', redirectTo: '/Contactus', pathMatch: 'full' }

];

@NgModule({
  declarations: [
    AdvancesolutionComponent,
    HomeComponent,
    OurproductComponent,
    ManagedserviceComponent,
    CompanyComponent,
    CareerComponent,
    ContactusComponent,
    InnerPageHeaderComponent,
    NewsComponent
],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
