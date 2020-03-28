import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {

  testimonials = [
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: 'xyz Company'
    },
    {
      clientView_1: ' Consectetur adipiscing elit. Aenean euismod bibendum laoreet.',
      clientView_2: ' Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.',
      clientView_3: ' lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor.',
      clientName: 'ABC Company'
    },
    {
      clientView_1: ' We ensure excellence in service through understanding of our clients business and their unique requirements.',
      clientView_2: ' Due to our close relationships and constant interactions with clients,',
      clientView_3: ' we have developed solid understanding and insight in our focus industries that include.',
      clientName: '123 Company'
    },
    {
      clientView_1: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      clientView_2: ' Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo',
      clientView_3: ' Proin sodales pulvinar tempor.',
      clientName: 'QWERTy'
    },
];
  constructor() { }

  ngOnInit() {
  }

}
