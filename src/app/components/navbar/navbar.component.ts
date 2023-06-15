import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url === '/home') {
          this.onRouteChange('home');
        } else if (event.url === '/gallery') {
          this.onRouteChange('gallery');
        } else if (event.url === '/projects') {
          this.onRouteChange('projects');
        } else if (event.url === '/ourTeam') {
          this.onRouteChange('ourTeam');
        } else if (event.url === '/contactUs') {
          this.onRouteChange('contactUs');
        }
      }
    });
  }
  onRouteChange(path: string) {
    const allLinks = document.getElementsByClassName('link');
    for (var i = 0; i < allLinks.length; i++) {
      allLinks[i].classList.remove('active');
    }

    const link = document.getElementById(path);
    link?.classList.add('active');
  }
}
