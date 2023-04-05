import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarModule } from './components/navbar/navbar.module';
import { ElementsGridModule } from './components/elements-grid/elements-grid.module';
import { ProjectAddFormModule } from './components/project-add-form/project-add-form.module';
import { SnackBarModule } from './services/snack-bar/snack-bar.module';
import { LoadingSpinnerModule } from './components/loading-spinner/loading-spinner.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NavbarModule,
    ElementsGridModule,
    ProjectAddFormModule,
    SnackBarModule,
    LoadingSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
