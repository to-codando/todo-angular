import { DataListEventType } from './../../types/index';
import { Component, OnInit } from '@angular/core';
import { DataListType } from 'src/types';
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


  constructor(private projects: ProjectService) { }

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
      .subscribe((data) => this.getProjects())
  }

  getProjects (): void {
    this.projects.get()
    .subscribe( data => this.setDataList(data))
  }

  dispatch () {
    console.log('ok ')
  }

   ngOnInit(): void{
    this.getProjects()
  }

}
