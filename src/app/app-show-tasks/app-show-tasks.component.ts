import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataListType, DataListEventType } from 'src/types';

@Component({
  selector: 'app-show-tasks',
  templateUrl: './app-show-tasks.component.html',
  styleUrls: ['./app-show-tasks.component.less']
})
export class AppShowTasksComponent implements OnInit {

  @Input() data: Array<DataListType> = []
  @Input() cols: number = 1
  @Output() onRemoveTask = new EventEmitter<DataListEventType>();
  @Output() onEditTask = new EventEmitter<DataListEventType>();

  constructor() { }

  removeTask (payload: DataListEventType) {
    this.onRemoveTask.emit({ ...payload });
  }

  editTask (payload: DataListEventType) {
    this.onEditTask.emit({ ...payload });
  }

  ngOnInit(): void {
    // console.log(this.data)
  }

}
