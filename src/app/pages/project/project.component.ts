import { Component, OnInit } from '@angular/core';
import { ProjectService} from 'src/app/services/project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projects = [];

  constructor(private readonly projectService: ProjectService) { }

  getProjects(){
    this.projectService.getProject().subscribe((rest: any) => {
      console.log(rest);
      this.projects = rest.data
    })
  }
  ngOnInit(): void {
    this.getProjects();
  }

}
