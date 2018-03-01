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
// import { App } from './app';

export const firebaseConfig = {
  apiKey: 'AIzaSyAV5rrybIZPNbyGmyxBq5y1qrdkEwXjZV0',
  authDomain: 'ernst-kaese.firebaseapp.com',
  databaseURL: 'https://ernst-kaese.firebaseio.com',
  projectId: 'ernst-kaese',
  storageBucket: 'ernst-kaese.appspot.com',
  messagingSenderId: '395267337356'
};

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
    RecaptchaModule.forRoot()
  ],
  providers: [AngularFireDatabaseModule, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
