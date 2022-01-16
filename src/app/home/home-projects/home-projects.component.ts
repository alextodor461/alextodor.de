import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent implements OnInit {
  
  showAllProjects(){
    (<HTMLInputElement>document.getElementById("Projects")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("Projects")).innerHTML = 
    `<div>
      <img src="assets/img/me.png">
    </div>`;
   }  

   showAngularProjects(){
    (<HTMLInputElement>document.getElementById("Projects")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("Projects")).innerHTML = 
    `<div>
      <img src="assets/img/api.png">
    </div>`;
   }

   showJavascriptProjects(){
    (<HTMLInputElement>document.getElementById("Projects")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("Projects")).innerHTML = 
    `<div>
      <img src="assets/img/css.png">
    </div>`;
   }

  ngOnInit(){
    this.showAngularProjects(); 
    this.showJavascriptProjects();
    this.showAllProjects();
  }
}
