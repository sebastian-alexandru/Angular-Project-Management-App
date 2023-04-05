import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'project-app';

  loading: boolean = true;
  ngOnInit(): void {
    if (this.loading) {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
}
