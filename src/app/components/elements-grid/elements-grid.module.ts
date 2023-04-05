import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { ElementsGridComponent } from './elements-grid.component';
import { ProjectServiceModule } from 'src/app/services/project-service/project-service.module';
import { CardElementModule } from './card-element/card-element.module';


@NgModule({
  declarations: [
    ElementsGridComponent,
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    ProjectServiceModule,
    CardElementModule
  ],
  exports: [
    ElementsGridComponent
  ]
})
export class ElementsGridModule { }
