import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})

export class SkillsComponent implements OnInit {
  skills = [];

  constructor(ds: DatabaseService) {
    ds.skillsDB.valueChanges().subscribe(response => { this.skills = response; });
  }

  ngOnInit() {
  }

}
