import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  industryInfo = [
    {title : 'IT, Telecom & Software'},
    {title : 'Telecom'},
    {title : 'ITES - BPO & KPO'},
    {title : 'Engineering & Manufacturing'},
    {title : 'Consumer Goods & Retail'},
    {title : 'Banking Financial Services & Insurance'},
    {title : 'Health Care & Pharmaceuticals'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
