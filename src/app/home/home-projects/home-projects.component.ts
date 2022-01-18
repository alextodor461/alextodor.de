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
      <div  class="project-div" (mouseover)="onMouseOver()">
        <img src="assets/img/code.jpg">

        <div id="overlay" class="overlay, d-none">
          <h3>EL POLLO LOCO</h3>
          <p>JavaScript - based jump and run game.</p>
          <a href="">Try out</a>
        </div>
      </div>
 
      <div class="project-div">
        <img src="assets/img/code2.jpg">

        <div class="overlay, d-none">
          <h3>EL POLLO LOCO</h3>
          <p>JavaScript - based jump and run game.</p>
          <a href="">Try out</a>
        </div>
      </div>

      <div class="project-div">
        <img src="assets/img/code3.jpg">

        <div class="overlay, d-none">
          <h3>EL POLLO LOCO</h3>
          <p>JavaScript - based jump and run game.</p>
          <a href="">Try out</a>
        </div>
      </div>

      <div class="project-div">
        <img src="assets/img/code4.jpg">

        <div class="overlay, d-none">
          <h3>EL POLLO LOCO</h3>
          <p>JavaScript - based jump and run game.</p>
          <a href="">Try out</a>
        </div>
      </div>
    </div>`;
   }  

   showAngularProjects(){
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = '';
    (<HTMLInputElement>document.getElementById("projects-main-div")).innerHTML = 
    `<div class="projects">
      <div class="project-div">
        <img src="assets/img/code4.jpg">

        <div class="overlay">
          <h3>EL POLLO LOCO</h3>
          <p>Angular - based jump and run game.</p>
          <a target="_blanc" href="http://alex-todor.developerakademie.net/El%20Pollo%20Loco">Try out</a>
        </div>
      </div>
 
      <div class="project-div">
        <img src="assets/img/code4.jpg">

        <div class="overlay">
          <h3>EL POLLO LOCO</h3>
          <p>Angular - based jump and run game.</p>
          <a href="">Try out</a>
        </div>
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

   onMouseOver(){
    (<HTMLInputElement>document.getElementById("overlay")).classList.remove('d-none');
    console.log('MOUUSEEE PVVVERR');
   }

  ngOnInit(){
    this.showAngularProjects(); 
    this.showJavascriptProjects();
    this.showAllProjects();
  }
}
