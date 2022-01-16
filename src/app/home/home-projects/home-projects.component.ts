import { Component, OnInit } from '@angular/core';

@Component({ 
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent implements OnInit {
  
  showAllProjects(){
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = 
    `<div class="projects">
      <div class="project-div">
        <img src="assets/img/code.jpg">
      </div>
  
      <div class="project-div">
        <img src="assets/img/code2.jpg">
      </div>

      <div class="project-div">
        <img src="assets/img/code3.jpg">
      </div>

      <div class="project-div">
        <img src="assets/img/code4.jpg">
      </div>
    </div>`;
   }  

   showAngularProjects(){
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = 
    `<div class="projects">
      <div class="project-div">
        <img src="assets/img/code4.jpg">
      </div>
 
      <div class="project-div">
        <img src="assets/img/code4.jpg">
      </div>
    </div>`;
   }

   showJavascriptProjects(){
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = 
    `<div class="projects">
      <div class="project-div">
        <img src="assets/img/css.png">
      </div>
     </div>`;
   }

  ngOnInit(){
    this.showAngularProjects(); 
    this.showJavascriptProjects();
    this.showAllProjects();
  }
}
