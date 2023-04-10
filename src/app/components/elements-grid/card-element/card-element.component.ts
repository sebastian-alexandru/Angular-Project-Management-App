import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProject } from 'src/app/models/project-interface';
import { ProjectServiceService } from 'src/app/services/project-service/project-service.service';
import { ProjectAddFormComponent } from '../../project-add-form/project-add-form.component';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-card-element',
  templateUrl: './card-element.component.html',
  styleUrls: ['./card-element.component.scss']
})
export class CardElementComponent {

  constructor(
    private dialog: MatDialog,
    private projectService: ProjectServiceService,
    private snackBarService: SnackBarService
  ) {}
  @Input() project!: IProject;

  imageUrl: string = "assets/img/imageProject1.jpg";

  openEditEntryForm(data: IProject) {
    const dialogRef = this.dialog.open(ProjectAddFormComponent, {
      data: data
    });
    dialogRef.afterClosed().subscribe({
      next: (val: IProject) => {
        if(val) {
          this.projectService.entries$ = this.projectService.getProjectList();
        }
      }
    })
  }

  deleteProject(id: number) {
    this.projectService.deleteProject(id).subscribe({
      next: (res) => {
        this.snackBarService.openSnackBar('Project deleted');
        this.projectService.entries$ = this.projectService.getProjectList();
      },
      error: (err) => {
        console.log(err)
      }
    })
  }

  hideProject(project: IProject) {
    if(!project.hidden) {
      project.hidden = true;
      this.snackBarService.openSnackBar('Project hidden')
    }
  }

  uploadImage(event:Event) {
    if ((event.target as HTMLInputElement).files) {
      var reader = new FileReader();
      reader.readAsDataURL((event.target as HTMLInputElement).files![0]);
      reader.onload = (event: any) => {
        this.imageUrl = event.target.result
      }
    }
  }

  openWebsite(url: string) {
    window.open(url, "_blank");
  }
}
