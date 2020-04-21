import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  list;
  managedService;
  managedServiceSoftEng;
  isOpen = true;
  isSlideOpen = true;
  constructor() {
    this.list = [
        {name: 'WhyArkedgeTchnologies'},
        {name: 'OurHappyClients'},
        {name: 'NewsAndEventUpdate'},
        {name: 'TestimonialClientSpeaks'},
        {name: 'Industries'},
        {name: 'Technology'},
        {name: 'Sitemap'}
    ];
    this.managedService = [
      {name: 'SoftwareEngineering',
      managedServiceList : [
        {name: 'ProjectEngineering'},
        {name: 'ApplicationDevelopment'},
        {name: 'Ux/UiDevelopment'},
        {name: 'SoftwareTesting & Qa'}
      ]},
      {name: 'DataMangment',
      managedServiceList : [
        {name: 'CleanseDataset'},
        {name: 'Data Mapping & Conversion'},
        {name: 'Data Migration & Consolidation'},
        {name: 'Spend Analysis'}
      ]},
      {name: 'ItStafingAndServices',
      managedServiceList : [
        {name: 'StaffingServices'},
        {name: 'StaffServiceIndustry'},
        {name: 'TrainingCourses'},
        {name: 'TrainingSchedule'}
      ]}
    ];
  }

  slideToggel() {
    this.isOpen = !this.isOpen;
  }

  slideOpen() {
    this.isSlideOpen = !this.isSlideOpen;
  }

  getUrl(a) {
     alert(a);
  }

  ngOnInit() {
  }

}
