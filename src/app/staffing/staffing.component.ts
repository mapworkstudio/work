import { Component, OnInit, NgModule } from '@angular/core';
import { SharedService } from '../shared.service';
import { CreateSpace } from '../space.pipe';

@Component({
  selector: 'app-staffing',
  templateUrl: './staffing.component.html',
  styleUrls: ['./staffing.component.scss']
})

@NgModule({
  declarations: [
    CreateSpace
  ]})

export class StaffingComponent implements OnInit {

  ourProcess = [
    {
    title: 'Quality Employee',
    // tslint:disable-next-line: max-line-length
    desc: 'We take the time to listen and understand your business. Our industry-specific recruiters and account teams, combined with our access to the best talent, ensure that we locate, screen and place only the most qualified employees.',
  },
  {
    title: 'Quality Relationship',
    // tslint:disable-next-line: max-line-length
    desc: 'But we don’t stop there. We stay connected with you to ensure our employees are meeting your expectations and we are delivering on our promises.',
  },
  {
    title: 'Strategic Partnership',
    // tslint:disable-next-line: max-line-length
    desc: 'Working together, we develop a strategic partnership to provide workforce consultation to make your staffing process more effective and evolve your business.',
  }
];

  staffingSolution = [
    {title: ' Rapid Staffing Solutions',
    // tslint:disable-next-line: max-line-length
    desc: 'Rapid Staffing Solutions addresses large requirements from clients, particularly at junior and middle management levels. Such requirements cater to start-up organizations, new project manning, plant expansion, scale up of team sizes and geographical expansion of teams.',
    // tslint:disable-next-line: max-line-length
    desc2: 'We can mobilize our vast internal resources to process large volume responses, manage selection of required personnel, including the management of administrative details and logistics. We also help you target specific segments of professionals for specialized roles.'
  },
  {title: 'Turnkey Staffing',
    // tslint:disable-next-line: max-line-length
    desc: 'The entire Recruitment Process is taken up as a Turnkey Assignment, whereby we manage the entire logistics i.e. written tests, Organizing Group Discussions, Conduction Technical Tests, and Preliminary Interviews etc. The entire activity from A to Z is taken up as a turnkey project.',
    // tslint:disable-next-line: max-line-length
    desc2: ''
  },
  {title: 'Executive Search',
    // tslint:disable-next-line: max-line-length
    desc: 'Our Executive search division focuses on senior level positions like President, CEO, COO, Managing Director, Vice President, General Manager, Project Directors etc. We also identify candidates in key technology and niche areas, people who are specialists in their chosen field of work.',
    // tslint:disable-next-line: max-line-length
    desc2: 'Based on the requirement of the client; we map the industry for the companies and the people who would be best suitable for the job. We, then discuss with the client to chart out a list of candidates who would suit their requirements. After which, we hold discussions with the candidates before the company contacts them. Thus, we act like a catalyst throughout, facilitating the recruitment process while also maintaining strict confidentiality.'
  }
  ];

  industriesSolution = [
    {list: 'IT, telecom and software'},
    {list: 'Telecom'},
    {list: 'ITES - BPO & KPO'},
    {list: 'Engineering & Manufacturing'},
    {list: 'Consumer goods and retail'},
    {list: 'Banking Financial services and insurance'},
    {list: 'Health care & Pharmaceuticals'}
  ];

  courses = [
    {coursetype: 'PDPC', courseDescription: 'Post Degree Programming Course with ONE Live Project', courseDuration: '6 Months'},
    {coursetype: 'CC01', courseDescription: '	Object Oriented Principles and Database Fundamentals', courseDuration: '2 Days'},
    {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
    {coursetype: 'SC01', courseDescription: 'Getting started with.Net, C# and ASP.NET', courseDuration: '1 Day'},
  ];
programCalendar = [
  {courseTitle : 'Post Degree Programming Course with ONE Live Project', location : 'Sr. Business Analyst',  targetDate: '04-Aug-18'},
  {courseTitle : 'Getting started with.Net, C# and ASP.NET', location : 'Mumbai, India', targetDate: '04-Jul-18'},
  {courseTitle : 'Architecture (Design Patterns and UML)', location : 'Mumbai, India', targetDate: '28-Jun-18'},
  {courseTitle : 'Load and Performance Testing (by using Load runner)	',  location : 'Mumbai, India', targetDate: '	28-Jul-18'},
  {courseTitle : 'MS Excel 2007 for Beginners', location : 'Mumbai, India', targetDate: '20-Jul-18'},
  {courseTitle : 'Ms Excel 2007 for Experienced', location : 'Mumbai, India', targetDate: '15-Aug-18'}
];


tabIndex;
tabName;
constructor(private sharedservice: SharedService) { }
ngOnInit() {
  this.sharedservice.sharedMessage.subscribe(Id => this.tabIndex = Id.Id, );
  this.sharedservice.sharedMessage.subscribe(Id => this.tabName = Id.name.replace(/([A-Z])/g, ' $1').trim());
}

}
