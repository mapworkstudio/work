import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  solution;
  keydiff = [
    {list : 'We provide custom application programming services to end customers.'},
    {list : 'Our competence and experience ensure that we provide excellent services and products to our customers.'},
    {list : 'At every stage of the development process, from conceptual design to product release, the highest quality standards are maintained.'},
    {list : 'Our extensive communication facilities allow us to keep in touch with our customers 24X7.'}
  ];


  tabs = [
    { title : 'About Us', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. The organization is making its presence felt on the engineering solution and services, Staffing and IT training circuit. Equipped with cross cultural operating experience; an asset, it drives the organization to deliver nothing but the best. Over the years we have built up a solid team of software professionals that come from different backgrounds and enlarge the creative potential of ARKEDGE. The competence that they offer contains a wide range of custom programming skills including the latest and most effective development in Microsoft technologies.'},
    { title : 'Why ARKEDGE', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '},
    { title : 'Centers of Excellence', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '},
    { title : 'Vision & Mission', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '},
    { title : 'Values', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '},
    { title : 'Leadership', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '},
    { title : 'News', decs : 'ARKEDGE is a rapidly growing professionally managed organization with competent and qualified brass at the helm of the affairs. '},
  ];
  constructor() {

    this.solution = [
      {
        title: 'Data Management',
        color: 'red',
        list : [
          {name: 'Cleanse Dataset'},
          {name: 'Data Mapping & Conversion'},
          {name: 'Data Migration & Consolidation'},
          {name: 'Spend Analysis'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
        icon: '#icon_mgmt'
      },
      {
        title: 'Software Engineering',
        color: 'blue',
        list : [
          {name: 'Product Engineering'},
          {name: 'Application Development'},
          {name: 'UX/UI Development'},
          {name: 'Software Testing & QA'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
        icon: '#icon_softEngg'
      },
      {
        title: 'IT Staffing & Training',
        color: 'green',
        list : [
          {name: 'Staffing Services'},
          {name: 'Industries'},
          {name: 'Courses'},
          {name: 'Program Calendar'}
        ],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio',
        icon: '#icon_training'
      },
    ];
   }

  ngOnInit() {
  }

}
