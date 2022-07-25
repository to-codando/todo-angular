import { Component, OnInit, Input } from '@angular/core';
import { DataListType } from 'src/types';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './app-show-tasks.component.html',
  styleUrls: ['./app-show-tasks.component.less']
})
export class AppShowTasksComponent implements OnInit {

  @Input() data: Array<DataListType> = []
  @Input() cols: number = 1

  constructor() { }

  ngOnInit(): void {
    // console.log(this.data)
  }

}
