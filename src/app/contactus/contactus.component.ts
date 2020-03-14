import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {
  contactInfo = [
          {title : 'General Informaton', subtitle : 'Inquiry', id : 'info@arkedge.com'},
          {title : 'Sales & Learning', subtitle : 'Business development', id : 'sales@arkedge.com'},
          {title : 'Current Openings', subtitle : 'Job apply', id : 'careers@arkedge.com'}
  ];

getTouch = [
    {img:'assets/images/contact', subtitle : 'Corporate Office', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id : 'info@arkedge.com'},
    {img:'assets/images/contact', subtitle : 'Mumbai', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id : 'info@arkedge.com'},
    {img:'assets/images/contact', subtitle : 'Thane', street_1: '201, B Tower Ashok Nagar, Marol Maroshi Road,', street_2: 'Andheri (E), Mumbai - 400047', state: 'Maharashtra, India', contact: '+91 9029290808', id : 'info@arkedge.com'},
];

  constructor() { }

  ngOnInit() {
  }
}
