import { DataListType } from 'src/types';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.less']
})
export class AppDashboardComponent implements OnInit {

  dataList: DataListType[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
