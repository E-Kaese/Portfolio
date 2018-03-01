import { DatabaseService } from './../database.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skills = [];

  constructor(ds: DatabaseService) {
    this.skills.splice(0, this.skills.length);
    this.skills = ds.getSkills();
  }

  ngOnInit() {
  }

}
