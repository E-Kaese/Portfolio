import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { DatabaseService } from './database.service';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { RecaptchaModule } from 'ng2-recaptcha';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
import { MetaModule, MetaLoader, MetaStaticLoader, PageTitlePositioning } from '@ngx-meta/core';

export const firebaseConfig = {
  apiKey: 'AIzaSyAV5rrybIZPNbyGmyxBq5y1qrdkEwXjZV0',
  authDomain: 'ernst-kaese.firebaseapp.com',
  databaseURL: 'https://ernst-kaese.firebaseio.com',
  projectId: 'ernst-kaese',
  storageBucket: 'ernst-kaese.appspot.com',
  messagingSenderId: '395267337356'
};

export function metaFactory(): MetaLoader {
  return new MetaStaticLoader({
    pageTitlePositioning: PageTitlePositioning.PrependPageTitle,
    pageTitleSeparator: ' - ',
    applicationName: 'Ernst Kaese - Portfolio',
    defaults: {
      author: 'Ernst Kaese',
      title: 'Portfolio',
      // tslint:disable-next-line:max-line-length
      description: 'My personal website to showcase projects I\'ve worked on and my skills.',
      // tslint:disable-next-line:max-line-length
      'og:image': 'https://firebasestorage.googleapis.com/v0/b/ernst-kaese.appspot.com/o/thumbnail.png?alt=media&token=492ae401-45f7-47ca-8407-08c471a257a0',
      'og:description': 'My personal website to showcase projects I\'ve worked on and my skills.',
      'og:type': 'website',
      'og:locale': 'en',
      'google-site-verification': 'pe3bDqeVWJ48p8iZblQ0kL6cMz6FXk_3ZYmtWSyhmao',
      // tslint:disable-next-line:max-line-length
      keywords: 'Ernst, Ernst Kaese, Kaese, Junior Developer, Web developer, mobile developer, dev, portfolio, Angular developer'
    }
  });
}

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    SkillsComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    Ng2PageScrollModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    HttpModule,
    FormsModule,
    RecaptchaModule.forRoot(),
    MetaModule.forRoot({
      provide: MetaLoader,
      useFactory: (metaFactory)
    })
  ],
  providers: [AngularFireDatabaseModule, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
