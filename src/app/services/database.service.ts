import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Http } from '@angular/http';
import { Project } from '../project';
import { Skill } from '../skill';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  skillsDB: AngularFireList<Skill>;
  projectsDB: AngularFireList<Project>;

  constructor(private af: AngularFireDatabase, private _http: Http) {
    this.projectsDB = af.list('/Projects');
    this.skillsDB = af.list('/Skills');
  }

  sendMailMessage(name, email, message) {
    const options = { 'name': name, 'email': email, 'message': message };
    this._http.post('/email', options).subscribe();
  }
}
