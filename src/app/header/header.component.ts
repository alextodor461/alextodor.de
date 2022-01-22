import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  openMenu(){
    (<HTMLInputElement>document.getElementById('menuLinks')).classList.toggle('menu-links-open'); 
  }

  closeMenu(){
    (<HTMLInputElement>document.getElementById('menuLinks')).classList.remove('menu-links-open');
  }

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
