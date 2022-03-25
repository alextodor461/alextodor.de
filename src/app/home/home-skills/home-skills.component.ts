import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-skills',
  templateUrl: './home-skills.component.html',
  styleUrls: ['./home-skills.component.scss']
})
export class HomeSkillsComponent implements OnInit {
  skill: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  @HostListener("document:scroll")
  scrollFunction(){
    if(document.documentElement.scrollTop){
      this.skill = true;
    }
  }
}
