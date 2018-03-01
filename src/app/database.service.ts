import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
declare var System: any;

@Injectable()
export class DatabaseService {
    skillsDB: Observable<any[]>;
    skills = [];
    projectsDB: Observable<any[]>;
    projects = [];

    constructor(private af: AngularFireDatabase, private _http: Http) {
        this.projectsDB = af.list('/Projects', ref => ref.orderByChild('date')).valueChanges();
        this.skillsDB = af.list('/Skills').valueChanges();
    }

    getSkills() {
        this.skills = [];
        this.skillsDB.forEach(element => {
            for (let i = 0; i < element.length; i++) {
                this.skills.push(element[i]);
            }
        });
        return this.skills;
    }

    getProjects() {
        this.projects = [];
        this.projectsDB.forEach(element => {
            for (let i = element.length - 2; i >= 0; i--) {
                this.projects.push(element[i]);
            }
            this.projects.push(element[element.length - 1]);
        });
        return this.projects;
    }

    sendMailMessage(name, email, message) {
        // const name = 'test';
        // const email = 'test@gmail.com';
        // const message = 'Please just work';
        const options = { 'name': name, 'email': email, 'message': message };
        // this._http.post('https://us-central1-ernst-kaese.cloudfunctions.net/widgets/email', options).subscribe();
        this._http.post('/email', options).subscribe();

        // const mail = new Mail(name, email, message);

        // var PythonShell = require('python-shell');
        // var options = {
        //     mode: 'text',
        //     pythonPath: '../../virtual/Scripts/',
        //     pythonOptions: ['-u'],
        //     scriptPath: '../../pyfiles/',
        //     args: [email, message]
        // };

        // PythonShell.run('send_message.py', options, function (err, results) {
        //     if (err) throw err;
        //     // results is an array consisting of messages collected during execution
        //     console.log('results: %j', results);
        // });
    }

}
