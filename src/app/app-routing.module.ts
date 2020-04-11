import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { ProjectengineeringComponent } from './projectengineering/projectengineering.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TechnologyComponent } from './technology/technology.component';
import { IndustriesComponent } from './industries/industries.component';
import { AdvancesolutionComponent } from './advancesolution/advancesolution.component';
import { StaffingComponent } from './staffing/staffing.component';
import { DatamgmtComponent } from './datamgmt/datamgmt.component';




const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'Advancesolution', component: AdvancesolutionComponent},
  {path: 'Technology', component: TechnologyComponent},
  {path: 'Industries', component: IndustriesComponent},
  {path: 'OurProduct', component: OurproductComponent},
  {path: 'ManagedService', component: ManagedserviceComponent},
  {path: 'Company', component: AboutComponent},
  {path: 'Career', component: CareerComponent},
  {path: 'Contactus', component: ContactusComponent},
  {path: 'NewsAndEventUpdate', component: NewsComponent},
  {path: 'WhoWeAre', component: AboutComponent},
  {path: 'WhyArkedgeTchnologies', component: AboutComponent},
  {path: 'CentersOfExcellence', component: AboutComponent},
  {path: 'VisionAndMission', component: AboutComponent},
  {path: 'ValueOfExcellence', component: AboutComponent},
  {path: 'OurLeadership', component: AboutComponent},
  {path: 'TestimonialClientSpeaks', component: TestimonialsComponent},
  {path: 'OurHappyClients', component: ClientComponent},
  {path: 'NewsAndEventUpdate', component: AboutComponent},
  {path: 'ValueOfExcellence', component: AboutComponent},
  {path: 'OurHappyClients', component: ClientComponent},
  {path: 'ProjectEngineering', component: ProjectengineeringComponent},
  {path: 'StaffingServices', component: StaffingComponent},
  {path: 'CleanseDataset', component: DatamgmtComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }

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
    ProjectengineeringComponent,
    TestimonialsComponent,
    StaffingComponent,
    DatamgmtComponent
],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false }),
    BrowserModule,
    NgbModule,
    SlickCarouselModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
