import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  opening = '<footer>';
  closing = '</footer>';

  constructor() {
    if (window.innerWidth < 600) {
      this.opening = '';
      this.closing = '';
    } else {
      this.opening = '<footer>';
      this.closing = '</footer>';
    }
  }

  ngOnInit() {
  }

  onResize(event) {
    if (window.innerWidth < 600) {
      this.opening = '';
      this.closing = '';
    } else {
      this.opening = '<footer>';
      this.closing = '</footer>';
    }
  }

}
