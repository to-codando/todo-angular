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

  setDataList (data: DataListType[]) {
    const icons = ['delete']
    this.dataList = data.map( item => {
      return { ...item, icons }
    })

  }

   ngOnInit(): void{
    this.projects.get()
      .subscribe( data => this.setDataList(data))
  }

}
