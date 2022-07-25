import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.less']
})
export class AppDashboardComponent implements OnInit {

  dataList = [
    {title: 'Primeira Tareafa', icons:['edit_square','delete']},
    {title: 'Segunda Tareafa', icons:['edit_square','delete']},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
