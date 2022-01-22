import { HtmlAstPath } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { HomeSkillsComponent } from '../home-skills/home-skills.component';

@Component({ 
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent implements OnInit {

  allProjects = [
    {
      name: "El Pollo Locco",
      url: "http://alex-todor.developerakademie.net/El%20Pollo%20Loco",
      text: "based jump and run game.",
      img: "assets/img/el-pollo-loco.png",
      category: "javascript"
    },

    {
      name: "KanbanBoard",
      url: "https://mygame.com",
      text: "An kanbanboard for your tasks.",
      img: "assets/img/kanban.png",
      category: "javascript"
    },

    {
      name: "El Pollo Locco",
      url: "https://mygame.com",
      img: "assets/img/code2.jpg",
      category: "angular"
    },

    {
      name: "El Pollo Locco",
      url: "https://mygame.com",
      img: "assets/img/code2.jpg",
      category: "angular"
    }
  ];

  filteredProjects = this.allProjects;

  showCategory(category: any){
      if(category == 'all'){
        this.filteredProjects = this.allProjects;
      }else{
        this.filteredProjects = this.allProjects.filter(p => p.category === category);
      }
  }

  showOverlay(){
    (<HTMLInputElement>document.getElementById('overlay')).classList.remove('d-none'); 
  }
  
  ngOnInit(){
    /*this.showAngularProjects(); 
    this.showJavascriptProjects();
    this.showAllProjects();*/
  }
}
