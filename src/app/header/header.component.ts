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
  constructor() {
    this.list = [
        {name: 'WhoWeAre'},
        {name: 'WhyArkedgeTchnologies'},
        {name: 'CentersOfExcellence'},
        {name: 'VisionAndMission'},
        {name: 'ValueOfExcellence'},
        {name: 'OurLeadership'},
        {name: 'OurHappyClients'},
        {name: 'NewsAndEventUpdate'},
        {name: 'Testimonial'}
    ];
    this.managedService = [
      {name: 'SOFTWARE ENGINEERING',
      managedServiceList : [
        {name: 'ProjectEngineering'},
        {name: 'ApplicationDevelopment'},
        {name: 'UX/UIDevelopment'},
        {name: 'SoftwareTesting & QA'}
      ]},
      {name: 'DATA MANAGEMENT',
      managedServiceList : [
        {name: 'CleanseDataset'},
        {name: 'Data Mapping & Conversion'},
        {name: 'Data Migration & Consolidation'},
        {name: 'Spend Analysis'}
      ]},
      {name: 'IT STAFFING & TRAINING',
      managedServiceList : [
        {name: 'StaffingServices'},
        {name: 'Industries'},
        {name: 'Courses'},
        {name: 'Program Calendar'}
      ]}
    ]
  }

  slideToggel() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
