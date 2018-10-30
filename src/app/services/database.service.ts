import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireFunctions } from '@angular/fire/functions';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Project } from '../project';
import { Skill } from '../skill';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  skillsDB: AngularFireList<Skill>;
  projectsDB: AngularFireList<Project>;

  constructor(private af: AngularFireDatabase, private _http: Http, private functions: AngularFireFunctions) {
    this.projectsDB = af.list('/Projects');
    this.skillsDB = af.list('/Skills');
  }

  sendMailMessage(name: string, email: string, message: string) {
    const messageObj = `{"name": "${name}", "email": "${email}", "message": "${message}"}`;
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this._http.post('https://us-central1-ernst-kaese.cloudfunctions.net/email/', messageObj, { headers: headers }).subscribe();
  }
}
