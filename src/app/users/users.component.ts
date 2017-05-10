import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users = [
      {id: 1, name: 'Leela'},
      {id: 2, name: 'Leela2'},
      {id: 3, name: 'Leela3'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
