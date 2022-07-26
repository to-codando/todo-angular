import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from './../services/project.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './app-create-project.component.html',
  styleUrls: ['./app-create-project.component.less']
})
export class AppCreateProjectComponent implements OnInit {

  constructor(
    private projects: ProjectService,
    private router: Router
  ) { }

  createProject (value: string): void {
    this.projects.create(value)
    .subscribe( data => {
      const { id } = data
      this.router.navigateByUrl(`/project/${id}`)
    })
  }

  ngOnInit(): void {
  }

}
