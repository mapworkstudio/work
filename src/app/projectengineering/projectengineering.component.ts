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

  dataEngi = [
    {
      icon: '#icon_daycare',
      title: 'Advisory & Architecture Design',
      description: 'Leverage from Scalable Enterprise Data Architecture Models'
    },
    {
      icon: '#icon_iteration',
      title: 'Data Analytics & BI Enablement',
      description: 'Leverage from an enterprise-ready Business Intelligence Platform'
    },
    {
      icon: '#icon_explor',
      title: 'Data Management & Governance',
      description: 'Deploy Effective Data Governance Solutions'
    },
    {
      icon: '#icon_explor',
      title: 'Data Movement & ETL',
      description: 'Collect, Combine and Synthesize your enterprise data at speed'
    },
    {
      icon: '#icon_explor',
      title: 'ML Engineering',
      description: 'Build and Automate a full stack of Machine Learning applications'
    },
    {
      icon: '#icon_explor',
      title: 'ML EngineeringData & Analytics Platforms Support',
      description: 'Configure, Implement, and Support Big Data and Cloud Infrastructure'
    }
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
    this.tabName = 'Product Engineering';
  } else if (i === 2) {
    this.tabName = 'Application Development';
  } else if (i === 3) {
    this.tabName = 'Data Engineering';
  } else if (i === 4) {
    this.tabName = 'UX/UI Development';
  } else if (i === 5) {
    this.tabName = 'Software Testing & QA';
  }
}

}
