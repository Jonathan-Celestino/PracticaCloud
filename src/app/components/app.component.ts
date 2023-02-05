import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public isCollapse = false;

  constructor(
    private router: Router
  ) {

  }

  public toggleSidebar(): void {
    this.isCollapse = !this.isCollapse;
  }

  public hideMenuIfNecesary() {
    if (this.isCollapse) {
      this.toggleSidebar();
    }
  }

  public isUserAuthenticated(): boolean {
    return false;
  }

  public isAdministrator(): boolean {
    return false;
  }
}
