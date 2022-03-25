import { HtmlAstPath } from '@angular/compiler';
import { Component, HostListener, OnInit } from '@angular/core';
import { HomeSkillsComponent } from '../home-skills/home-skills.component';

@Component({ 
  selector: 'app-home-projects',
  templateUrl: './home-projects.component.html',
  styleUrls: ['./home-projects.component.scss']
})
export class HomeProjectsComponent implements OnInit {
  projects: boolean = false;
  selectedProject: boolean = true;

  allProjects = [
    {
      name: "El Pollo Locco",
      url: "https://alextodor.de/El%20Pollo%20Loco",
      text: "based jump and run game.",
      img: "assets/img/elpolloloco.png",
      category: "javascript"
    },

    {
      name: "Join - KanbanBoard",
      url: "http://alextodor.de/Kanbanboard",
      text: "An kanbanboard for your tasks.",
      img: "assets/img/join-img.png",
      category: "javascript"
    },

    {
      name: "Ring Of Fire",
      url: "https://ring-of-fire-c8df6.web.app",
      text: "The Ring of Fire drinking game.",
      img: "assets/img/ringoffire.png",
      category: "angular"
    },

    /*{
      name: "Slack",
      url: "https://mygame.com",
      text: "Slack",
      img: "assets/img/chat-img.jpg",
      category: "angular"
    },*/

    {
      name: "Kochwelt",
      url: "https://alextodor.de/Kochwelt",
      text: "Find the perfect recipe.",
      img: "assets/img/kochwelt-img.png",
      category: "javascript"
    },
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

  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.documentElement.scrollTop){
      this.projects = true;
    }
  }
}
