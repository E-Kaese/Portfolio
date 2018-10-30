import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';

import { AppComponent } from './app.component';
import { StartPageComponent } from './start-page/start-page.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { DatabaseService } from './services/database.service';
import { AngularFireFunctionsModule } from '@angular/fire/functions';

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
    SkillsComponent,
    ProjectsComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    FontAwesomeModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,
    HttpModule,
    FormsModule,
    RecaptchaModule.forRoot()
  ],
  providers: [AngularFireDatabaseModule, DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
