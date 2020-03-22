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
import { AboutComponent } from './about/about.component';
import { ClientComponent } from './client/client.component';
import { IndustriesComponent } from './industries/industries.component';
import { TechnologyComponent } from './technology/technology.component';
import { ProjectengineeringComponent } from './projectengineering/projectengineering.component';





const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Advancesolution', component: AdvancesolutionComponent},
  {path: 'Technology', component: TechnologyComponent},
  {path: 'Industries', component: IndustriesComponent},
  {path: 'OurProduct', component: OurproductComponent},
  {path: 'ManagedService', component: ManagedserviceComponent},
  {path: 'Company', component: CompanyComponent},
  {path: 'Career', component: CareerComponent},
  {path: 'Contactus', component: ContactusComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'client', component: ClientComponent},
  {path: 'Projectengineering', component: ProjectengineeringComponent},
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
    ContactusComponent,
    InnerPageHeaderComponent,
    NewsComponent,
    AboutComponent,
    ClientComponent,
    TechnologyComponent,
    IndustriesComponent,
    ProjectengineeringComponent
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
