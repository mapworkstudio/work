import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  careerInfo = [
    {title : 'General Informaton', subtitle : 'Inquiry', id : 'info@arkedge.com'},
    {title : 'Sales & Learning', subtitle : 'Business development', id : 'sales@arkedge.com'}
];

career = [
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
  {jobcode : 'B302', jobtitle : 'Sr. Business Analyst', location : 'Mumbai, India', targetDate: '20-Feb-2020'},
];

  constructor() { }

  ngOnInit() {
  }

}
