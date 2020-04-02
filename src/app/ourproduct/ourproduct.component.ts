import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.scss']
})
export class OurproductComponent implements OnInit {
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };
  products = [
    {title: 'Looking for automation to drive performance and profitability'},
    {title: 'helps enterprises rapidly build the infrastructure and capabilities'},
    {title: 'Arkedge unified approach — encompassing strategy, software and managed services '},
    {title: 'Looking for automation to drive performance and profitability'},
    {title: 'helps enterprises rapidly build the infrastructure and capabilities'},

  ];

  constructor() { }

  ngOnInit() {
  }

}
