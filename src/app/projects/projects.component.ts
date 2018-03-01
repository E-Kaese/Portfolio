import { DatabaseService } from './../database.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  list = [];
  
  constructor(ds: DatabaseService) {
    this.list = ds.getProjects();
  }

  ngOnInit() {
  }

}
