import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professor-list',
  templateUrl: './professor-list.component.html',
  styleUrls: ['./professor-list.component.css']
})
export class ProfessorListComponent implements OnInit {
  professors: any = [
    {
      firstName:'abc',
      lastName: 'abc'
     }
  ];
  constructor() { }

  ngOnInit() {
  }

}
