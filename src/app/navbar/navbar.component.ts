import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }

  toggle() {
    if (getComputedStyle(document.getElementById('toggler'), null).display !== 'none') {
      document.getElementById('toggler').click();
    }
  }
}
