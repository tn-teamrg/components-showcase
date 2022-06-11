import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: 'Gosling', age: 67, job: 'Dr. Java', employed: true },
    { name: 'Johnson', age: 27, job: 'Spring Framework Creator', employed: false },
    { name: 'Leroy', age: 22, job: 'Pen Tester', employed: true },
    { name: 'L', age: 33, job: 'UI Architect', employed: true },
  ];
  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' },
    { key: 'employed', label: 'Has a job' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
