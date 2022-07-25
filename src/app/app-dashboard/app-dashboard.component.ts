import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataListType, TaskType, DataListEventType } from 'src/types';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.less'],
})
export class AppDashboardComponent implements OnInit {
  dataList: DataListType[] = [];

  constructor(
    private route: ActivatedRoute,
    private projects: ProjectService
  ) {}

  setData(data: TaskType[]) {
    const path = '';

    const icons = [
      { type: 'edit_square', event: 'edit_task' },
      { type: 'delete', event: 'remove_task' },
    ];

    this.dataList = data.map((task) => ({ ...task, icons, path }));
  }

  removeTask(payload: DataListEventType) {
    const {data: { id }} = payload
    this.projects.removeTask(id)
      .subscribe(() => this.getTasks())
  }

  editTask(payload: DataListEventType) {
    console.log(payload);
  }

  getTasks () {
    this.route.params.subscribe(({ id }) => {
      this.projects.getTasksBy(id).subscribe((data) => this.setData(data));
    });
  }

  ngOnInit(): void {
    this.getTasks()
  }
}
