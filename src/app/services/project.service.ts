import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ProjectType, TaskType, BasicTaskType } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  apiURL: string = ''

  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:3000'
  }

  get (): Observable<ProjectType[]> {
    return this.http.get<ProjectType[]>(`${this.apiURL}/projects`)
  }

  getTasksBy(projectId: number): Observable<TaskType[]> {
    return this.http.get<TaskType[]>(`${this.apiURL}/tasks?projectId=${projectId}`)
  }

  remove (id: number ): Observable<ProjectType[]> {
    return this.http.delete<ProjectType[]>(`${this.apiURL}/projects/${id}`)
  }

  removeTask (id: number ): Observable<TaskType[]> {
    return this.http.delete<TaskType[]>(`${this.apiURL}/tasks/${id}`)
  }

  create (title: string): Observable<ProjectType> {
    return this.http.post<ProjectType>(`${this.apiURL}/projects`, {title})
  }

  createTask (data: BasicTaskType): Observable<ProjectType> {
    return this.http.post<ProjectType>(`${this.apiURL}/tasks`, {...data})
  }

}
