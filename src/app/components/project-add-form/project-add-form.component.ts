import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProject } from 'src/app/models/project-interface';
import { ProjectServiceService } from 'src/app/services/project-service/project-service.service';
import { SnackBarService } from 'src/app/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-project-add-form',
  templateUrl: './project-add-form.component.html',
  styleUrls: ['./project-add-form.component.scss']
})
export class ProjectAddFormComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private projectService: ProjectServiceService,
    private dialogRef: MatDialogRef<ProjectAddFormComponent>,
    private snackBarService: SnackBarService,
    @Inject(MAT_DIALOG_DATA) private data: IProject
  ) {
    this.projectForm = this.fb.group({
      name: '',
      description: '',
      url: '',
      imageUrl: ''
    })
  }

  ngOnInit(): void {
    this.projectForm.patchValue(this.data);
  }

  onFormSubmit() {
    if(this.projectForm.valid) {
      if (this.data) {
        this.projectService.updateProject(this.data.id, this.projectForm.value)
        .subscribe({
          next: (val: IProject) => {
            this.snackBarService.openSnackBar('Project updated');
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.log(err)
          }
        })
      } else {
        this.projectService.addProject(this.projectForm.value).subscribe({
          next: (val: IProject) => {
            this.snackBarService.openSnackBar('Project added');
            this.dialogRef.close(true);
          },
          error: (err) => {
            console.log(err)
          }
        })
      }
    }
  }
}
