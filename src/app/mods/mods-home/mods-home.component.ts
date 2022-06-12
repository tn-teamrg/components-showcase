import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen: boolean = false;
  items = [
    { title: 'title1', content: 'Laborum labore esse qui excepteur non.'},
    { title: 'title2', content: 'Do id do laborum proident laboris.'},
    { title: 'title3', content: 'Lorem aute voluptate quis ipsum sit pariatur mollit pariatur quis deserunt.'},
    { title: 'title4', content: 'Laborum esse labore duis velit mollit ipsum nostrud in adipisicing.'},
    { title: 'title5', content: 'Ad ut duis officia irure culpa.'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void{
    this.modalOpen = !this.modalOpen;
  }
}
