import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataListType } from 'src/types';
import { TaskType } from 'src/types';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.less'],
})
export class AppDashboardComponent implements OnInit {
  dataList: DataListType[] = [];

  // ['edit_sqaure','delete']

  constructor(
    private route: ActivatedRoute,
    private projects: ProjectService,
    ) {}

    setData (data: TaskType[]) {
      const icons = ['edit_square','delete']
      const path = ''
      this.dataList = data.map( task => ({ ...task, icons, path }))
    }

  ngOnInit(): void {
    this.route.params.subscribe(({id}) => {
      this.projects.getTasksBy(id)
      .subscribe( data => this.setData(data))
    });
  }
}
