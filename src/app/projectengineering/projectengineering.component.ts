import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projectengineering',
  templateUrl: './projectengineering.component.html',
  styleUrls: ['./projectengineering.component.scss']
})
export class ProjectengineeringComponent implements OnInit {

  solution = [
    {
      title: 'Idea',
      info: 'Our idealogy text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
      icon: '#icon_Idea'
    },
    {
      title: 'Concept',
      info: 'Concept text will come, Lorem ipsum dolor sit.',
      icon: '#icon_Concept'
    },
    {
      title: 'Design',
      info: 'Design text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
      icon: '#icon_Design'
    },
    {
      title: 'Develop',
      info: 'Develop text will come, Lorem ipsum dolor.',
      icon: '#icon_Develop'
    },
    {
      title: 'Test',
      info: 'Test text will come, Lorem ipsum dolor sit ametadipiscing elit, sed do eiusmod tempor.',
      icon: '#icon_Test'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
