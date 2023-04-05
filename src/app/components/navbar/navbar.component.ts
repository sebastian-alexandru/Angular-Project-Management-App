import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { ProjectServiceService } from 'src/app/services/project-service/project-service.service';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from 'src/app/models/project-interface';
import { ProjectAddFormComponent } from '../project-add-form/project-add-form.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(
    private dialog: MatDialog,
    private projectService: ProjectServiceService
  ) {}

  openAddEntryForm() {
    const dialogRef = this.dialog.open(ProjectAddFormComponent);
    dialogRef.afterClosed().subscribe({
      next: (val: IProject) => {
        if(val) {
          this.projectService.entries$ = this.projectService.getProjectList();
        }
      }
    })
  }
}
