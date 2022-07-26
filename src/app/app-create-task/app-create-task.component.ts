import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ProjectService } from './../services/project.service';
@Component({
  selector: 'app-create-task',
  templateUrl: './app-create-task.component.html',
  styleUrls: ['./app-create-task.component.less']
})
export class AppCreateTaskComponent implements OnInit {

  constructor(
    private projects: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  createTask (title: string): void {
    const projectId = this.route.snapshot.params['id']
    this.projects.createTask({ title, projectId })
      .subscribe(() => this.router.navigateByUrl(`project/${projectId}`))
  }

  ngOnInit(): void {
  }

}
