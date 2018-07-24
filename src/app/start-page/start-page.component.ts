import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.css']
})
export class StartPageComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTags([
      {'author': 'Ernst Kaese'},
      {'title': 'Ernst Kaese - Portfolio'},
      // tslint:disable-next-line:max-line-length
      {'description': 'My personal website to showcase projects I\'ve worked on and my skills.'},
      // tslint:disable-next-line:max-line-length
      {'og:image': 'https://firebasestorage.googleapis.com/v0/b/ernst-kaese.appspot.com/o/thumbnail.png?alt=media&token=492ae401-45f7-47ca-8407-08c471a257a0'},
      {'og:description': 'My personal website to showcase projects I\'ve worked on and my skills.'},
      {'og:type': 'website'},
      {'og:locale': 'en'},
      {'google-site-verification': 'pe3bDqeVWJ48p8iZblQ0kL6cMz6FXk_3ZYmtWSyhmao'},
      {'og:url': 'https://ernst-kaese.herokuapp.com/'},
      // tslint:disable-next-line:max-line-length
      {'keywords': 'Ernst, Ernst Kaese, Kaese, Junior Developer, Web developer, mobile developer, dev, portfolio, Angular developer'}
    ]);
  }

  ngOnInit() {
  }

}
