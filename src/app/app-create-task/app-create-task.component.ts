import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from './../services/project.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.less']
})
export class AppCreateTaskComponent implements OnInit {

  projectId: number = 0;

  constructor(
    private projects: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  createTask (title: string): void {
    const projectId = this.projectId
    this.projects.createTask({ title, projectId })
      .subscribe(() => this.router.navigateByUrl(`project/${projectId}`))
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id']
  }

}
