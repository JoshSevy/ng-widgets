import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.css']
})
export class ModsHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    { title: 'Place Question data here:', content: 'Place answer to question here:'},
    { title: 'Place Question data here:', content: 'Place answer to question here:'},
    { title: 'Place Question data here:', content: 'Place answer to question here:'},
    { title: 'Place Question data here:', content: 'Place answer to question here:'},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.modalOpen = !this.modalOpen;
  }

}
