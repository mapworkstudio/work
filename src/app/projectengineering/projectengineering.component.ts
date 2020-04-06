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

  keydiff = [
    { list: 'New application development' },
    { list: 'Existing application enhancement' },
    { list: 'Application maintenance' },
    { list: 'Application migration' },
    { list: 'Production and post production support' },
    { list: 'Application testing' }
  ];

  uiUxInfo = [
    {icon : '#icon_daycare', title : 'User-Centred Design', description : 'We design interfaces in perfect synchronization with users, which requires a UX design approach that positions the users in the center.'},
    {icon : '#icon_iteration', title : 'Iterative Approach', description : 'We benefit from prototyping to get early feedback from users in a more iterative way throughout the design process.'},
    {icon : '#icon_explor', title : 'Discover + Design + Develop', description : 'D3 Service Discover + Design + Develop. To create a digital experience that will shift your business to the next level.z'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
