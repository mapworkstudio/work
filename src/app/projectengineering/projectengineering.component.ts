import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

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
    { icon: '#icon_daycare', title: 'User-Centred Design', description: 'We design interfaces in perfect synchronization with users, which requires a UX design approach that positions the users in the center.' },
    { icon: '#icon_iteration', title: 'Iterative Approach', description: 'We benefit from prototyping to get early feedback from users in a more iterative way throughout the design process.' },
    { icon: '#icon_explor', title: 'Discover + Design + Develop', description: 'D3 Service Discover + Design + Develop. To create a digital experience that will shift your business to the next level.z' }
  ];


  qaInfo = [
    {
      title: 'Cost of the Quality',
      info: 'For optimal return on investment the rule is fix bugs before the release, not after. Smart technology companies know that instead of focusing on patching defects, they must ensure that defects are taken care of before the consumer finds them. Well planned and executed test engineering not only reduces the risks of defects, but helps to ensure project costs stay within budget and timeframe.'
    },
    {
      title: 'Testing Categories / Types',
      info: 'Arkedge Software Testing Services offerings are based on disciplined test methodologies and processes, state of the art infrastructure and industry leading tools, as well as highly skilled and experienced professional staff.'
    },
  ];

  qafunctionTest = [
          {info: 'Unit Testing'},
          {info: 'Smoke / Sanity Testing'},
          {info: 'ntegration Testing'},
          {info: 'Interface & Usability Testing'},
          {info: 'System testing'},
          {info: 'Regression Testing'},
          {info: 'User Acceptance Testing'}
  ];

qanonfunctionTest = [
    {info: 'Load & Performance Testing'},
    {info: 'Stress & Volume Testing'},
    {info: 'Security Testing'},
    {info: 'Interoperability Testing'},
    {info: 'Reliability / Availability Test'},
    {info: 'Installation Testing'},
    {info: 'Compatibility Testing'}
];

qalabfunctionTest = [
  {info: 'Unit Test'},
  {info: 'Functional Test'},
  {info: 'Regression Test'},
  {info: 'Test Data Creation'},
  {info: 'Load Testing'},
  {info: 'Stress Testing'},
  {info: 'Volume Testing'}
];

tabIndex;
tabName;
constructor(private sharedservice: SharedService) { }
ngOnInit() {
  this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id);
  this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
}

title(i) {
  if (i === 1) {
    this.tabName = 'Cleanse Dataset';
  } else if (i === 2) {
    this.tabName = 'Data Mapping & Conversion';
  } else if (i === 3) {
    this.tabName = 'Data Migration & Consolidation';
  } else if (i === 4) {
    this.tabName = 'Spend Analysis';
  }
}

}
