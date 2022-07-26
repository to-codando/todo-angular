import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataListType, DataListEventType } from 'src/types';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './app-sidebar.component.html',
  styleUrls: ['./app-sidebar.component.less']
})
export class AppSidebarComponent implements OnInit {

  typeButton: string = 'circle';
  typeIconButton: string = 'add';
  cols = 2
  dataList: DataListType[] = [];
  path = 'project'


  constructor(
    private projects: ProjectService,
    private route: Router,
  ) { }

  setDataList (data: DataListType[]): void {

    const icons = [{
      type: 'delete',
      event:'remove_project'
    }]

    this.dataList = data.map( item => {
      return { ...item, icons }
    })

  }

  removeProject (payload: DataListEventType) {
    const { icon: { event }, data: { id } } = payload
    this.projects.remove(id)
      .subscribe((data) => this.route.navigateByUrl(''))
  }

  getProjects (): void {
    this.projects.get()
    .subscribe( data => this.setDataList(data))
  }

  loadPage () {
    this.route.navigateByUrl('/create-project')
  }

   ngOnInit(): void{
    this.getProjects()
  }

}
