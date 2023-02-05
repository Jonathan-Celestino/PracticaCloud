import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() isUserAuthenticated?: boolean;
  public nickName!: string;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {}

  public logout(): void {
    this.router.navigate(['/login']);
  }

  public getNickName() {
    return this.nickName;
  }
}
