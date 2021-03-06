import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { viewClassName } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  list;
  managedService
  managedServiceSoftEng;
  isOpen = true;
  constructor() {
    this.list = [
        {name: 'Link come here Consectetur'},
        {name: 'Link come here Aenean euismod'},
        {name: 'Link come here Proin gravida doloet'},
        {name: 'Viverra justo commodo.'},
        {name: 'Proin sodales'}
    ];
    this.managedService = [
      {name:'SOFTWARE ENGINEERING',
      managedServiceList : [
        {name:'Product Engineering'},
        {name:'Application Development'},
        {name:'UX/UI Development'},
        {name:'Software Testing & QA'}
      ]},
      {name:'DATA MANAGEMENT',
      managedServiceList : [
        {name:'Cleanse Dataset'},
        {name:'Data Mapping & Conversion'},
        {name:'Data Migration & Consolidation'},
        {name:'Spend Analysis'}
      ]},
      {name:'IT STAFFING & TRAINING',
      managedServiceList : [
        {name:'Staffing Services'},
        {name:'Industries'},
        {name:'Courses'},
        {name:'Program Calendar'}
      ]}
    ]
  }

  slideToggel() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit() {
  }

}
