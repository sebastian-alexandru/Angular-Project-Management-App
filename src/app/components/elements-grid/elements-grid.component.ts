import { Component, OnInit } from '@angular/core';
import { ProjectServiceService } from 'src/app/services/project-service/project-service.service';

@Component({
  selector: 'app-elements-grid',
  templateUrl: './elements-grid.component.html',
  styleUrls: ['./elements-grid.component.scss']
})
export class ElementsGridComponent implements OnInit {
  constructor(public projectService: ProjectServiceService) { }

  ngOnInit(): void {
    this.projectService.entries$ = this.projectService.getProjectList();
  }
}
