import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.scss']
})
export class IndustriesComponent implements OnInit {

  industryInfo = [
    {title : 'IT, Telecom & Software', icon: 'icon_itsoftware'},
    {title : 'Telecom', icon: 'icon_teletower'},
    {title : 'ITES - BPO & KPO', icon: 'icon_bpoKpo'},
    {title : 'Engineering & Manufacturing', icon: 'icon_egmg'},
    {title : 'Consumer Goods & Retail', icon: 'icon_retailflat'},
    {title : 'Banking Financial Services & Insurance', icon: 'icon_accountflat'},
    {title : 'Health Care & Pharmaceuticals', icon: 'icon_vaccineflat'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
