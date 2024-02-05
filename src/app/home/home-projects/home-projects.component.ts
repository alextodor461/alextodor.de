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
  btnAll: boolean = true;
  btnAng: boolean = false;
  btnJS: boolean = false;
  
  allProjects = [
    {
      name: "- El Pollo Loco -",
      url: "http://alextodor.de/El%20Pollo%20Loco",
      text: "based jump and run game.",
      img: "assets/img/elpolloloco.png",
      category: "javascript"
    },

    {
      name: "- Join - Kanbanboard -",
      url: "http://alextodor.de/Kanbanboard",
      text: "An kanbanboard for your tasks.",
      img: "assets/img/join-img.png",
      category: "javascript"
    },

    {
      name: "- Ring Of Fire -",
      url: "https://ring-of-fire-c8df6.web.app",
      text: "The Ring of Fire drinking game.",
      img: "assets/img/ringoffire.png",
      category: "angular"
    },

    {
      name: "- Kochwelt -",
      url: "https://alextodor.de/Kochwelt",
      text: "Find the perfect recipe.",
      img: "assets/img/kochwelt-img.png",
      category: "javascript"
    },

    {
      name: "- Weather Report - Built with REST Api -",
      url: "https://alextodor.de/weather-report",
      text: "Find the weather report in every city.",
      img: "assets/img/weather-app.png",
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

  showAll(){
    this.btnAll = true;
    this.btnAng = false;
    this.btnJS = false;
  }

  showAngular(){
    this.btnAll = false;
    this.btnAng = true;
    this.btnJS = false;
  }

  showJS(){
    this.btnAll = false;
    this.btnAng = false;
    this.btnJS = true;
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
