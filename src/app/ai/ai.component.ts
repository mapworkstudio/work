import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.scss']
})
export class AiComponent implements OnInit {
  bizPro: any;
  finance: any;

  constructor() {
    this.finance = [
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      },
      {
        title: 'Data Management'
      }
    ]

    this.bizPro = [
      {
        title: 'Data Management',
        color: 'red',
        list: [
          { name: 'Cleanse Dataset' },
          { name: 'Data Mapping & Conversion' },
          { name: 'Data Migration & Consolidation' },
          { name: 'Spend Analysis' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_mgmt'
      },
      {
        title: 'Software Engineering',
        color: 'blue',
        list: [
          { name: 'Product Engineering' },
          { name: 'Application Development' },
          { name: 'UX/UI Development' },
          { name: 'Software Testing & QA' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_softEngg'
      },
      {
        title: 'IT Staffing & Training',
        color: 'green',
        list: [
          { name: 'Staffing Services' },
          { name: 'Industries' },
          { name: 'Courses' },
          { name: 'Program Calendar' }
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        icon: '#icon_training'
      },
    ];

  }

  ngOnInit() {
  }

}
