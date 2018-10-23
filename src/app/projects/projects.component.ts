import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Project } from '../project';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {
  list: Project[] = [];

  constructor(ds: DatabaseService) {
    ds.projectsDB.valueChanges().subscribe(response => {
      this.list = response;
      this.list.sort(function(a, b) { return b.date - a.date; });
    });
  }

  ngOnInit() {
  }

}
