import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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

  projectId: number|null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  removeTask (payload: DataListEventType) {
    this.onRemoveTask.emit({ ...payload });
  }

  editTask (payload: DataListEventType) {
    this.onEditTask.emit({ ...payload });
  }

  setProjectId () {
    this.route.params.subscribe( params => {
      this.projectId = this.route.snapshot.params['id']
    })

  }

  loadPage (): void {
    if(!this.projectId) return
    this.router.navigateByUrl(`project/${this.projectId}/task`)
    this.projectId = null
  }

  ngOnInit(): void {
    this.setProjectId()
  }

}
