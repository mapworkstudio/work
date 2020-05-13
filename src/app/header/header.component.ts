import { Component, OnInit, OnDestroy} from '@angular/core';
import { viewClassName } from '@angular/compiler';
import { SharedService } from '../shared.service';

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

  constructor(private sharedservice: SharedService) {
    this.list = [
        {name: 'WhyArkedgeTchnologies'},
        {name: 'OurHappyClients'},
        {name: 'NewsAndEventUpdate'},
        {name: 'TestimonialClientSpeaks'},
        {name: 'Industries'},
        {name: 'Technology'},
        {name: 'Career'},
        {name: 'Sitemap'}
    ];
    this.managedService = [
      {name: 'SoftwareEngineering',
      managedServiceList : [
        {name: 'ProjectEngineering'},
        {name: 'ApplicationDevelopment'},
        {name: 'DataEngineering'},
        {name: 'Ux/UiDevelopment'},
        {name: 'SoftwareTesting & Qa'}
      ]},
      {name: 'ConsultingSercvices',
      managedServiceList : [
        {name: 'DataScience'},
        {name: 'InformationSecurity'},
        {name: 'PerformanceOptimization'},
        {name: 'CloudComputing'},
        {name: 'DataManagement'}
      ]},
      {name: 'ItStafingAndServices',
      managedServiceList : [
        {name: 'StaffingServices'},
        {name: 'StaffingIndustry'},
        {name: 'It Training'},
        {name: 'ProgramSchedule'}
      ]}
    ];
  }

  slideToggel() {
    const body = document.getElementsByTagName('body')[0];
    this.isOpen = !this.isOpen;
    if (!this.isOpen) {
      body.classList.add('remove-scroll');
    } else {
      body.classList.remove('remove-scroll'); 
    }
  }


  ngOnInit() {
  }

  getUrl(i, title) {
    this.sharedservice.nextMessage(i, title);
  }

}
