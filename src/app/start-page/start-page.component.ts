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
      {name: 'author', content: 'Ernst Kaese'},
      {name: 'title', content: 'Ernst Kaese - Portfolio'},
      {name: 'description', content: 'My personal website to showcase projects I\'ve worked on and my skills.'},
      // tslint:disable-next-line:max-line-length
      {name: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/ernst-kaese.appspot.com/o/thumbnail.png?alt=media&token=492ae401-45f7-47ca-8407-08c471a257a0'},
      {name: 'og:description', content: 'My personal website to showcase projects I\'ve worked on and my skills.'},
      {name: 'og:type', content: 'website'},
      {name: 'og:locale', content: 'en'},
      {name: 'google-site-verification', content: 'pe3bDqeVWJ48p8iZblQ0kL6cMz6FXk_3ZYmtWSyhmao'},
      {name: 'og:url', content: 'https://ernst-kaese.herokuapp.com/'},
      // tslint:disable-next-line:max-line-length
      {name: 'keywords', content: 'Ernst, Ernst Kaese, Kaese, Junior Developer, Web developer, mobile developer, dev, portfolio, Angular developer'}
    ]);
  }

  ngOnInit() {
  }

}
