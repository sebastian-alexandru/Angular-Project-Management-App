import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProject } from 'src/app/models/project-interface';

@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {

  private readonly apiUrl = 'http://localhost:3000';

  public entries$!: Observable<IProject[]>;

  constructor(private http: HttpClient) { }

  addProject(data: IProject): Observable<any> {
    return this.http.post(`${this.apiUrl}/projects`, data)
  }

  updateProject(id: number, data: IProject): Observable<any> {
    return this.http.put(`${this.apiUrl}/projects/${id}`, data)
  }

  getProjectList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/projects`)
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/projects/${id}`)
  }
}
