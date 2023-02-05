import { Component, OnInit, Input } from '@angular/core';
import {
  faHouseUser,
  faHamburger,
  faUtensils,
  faCoins,
  faReceipt,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() isAdmin?: boolean;
  navbarOpen = false;

  faHouseUser = faHouseUser;
  faHamburger = faHamburger;
  faUtensils = faUtensils;
  faCoins = faCoins;
  faReceipt = faReceipt;
  faBars = faBars;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
  }

  changeClass(item : any) {

  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
