import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {

  stats = [
    { value: 22, label: '# of Users' },
    { value: 900, label: 'Revenue' },
    { value: 50, label: 'Reviews' }
  ];

  items = [
    { image: '/assets/images/couch.jpeg', title: 'Couch', description: 'couch description goes here'},
    { image: '/assets/images/dresser.jpeg', title: 'Dresser', description: 'dresser description goes here'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
