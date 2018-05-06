import { Component, OnInit } from '@angular/core';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
  stagger,
  keyframes
} from '@angular/animations';

import { Page } from './pagedefine/pagedefine.component';
import { PAGES } from './pagenames/pagenames.component';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss'],
  animations: [
    trigger('childAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', width:'100%' }), { optional: true }),
        group([ 
          query(':enter', [
            style({ transform: 'translateX(100%)', zIndex: 2 }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)', zIndex: 2 }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'scale(1)', zIndex: 1, opacity: 1 }),
            animate('0.5s ease-in-out', style({ transform: 'scale(0)', zIndex: 1, opacity: 0 }))], {optional: true}),
        ]),
      ])
    ])
  ]
})
export class MyworkComponent implements OnInit {

  pages = PAGES;
  selectedPage: Page;

  constructor() { }

  ngOnInit() {
    var gallBtn = document.getElementById('pick_gallery') as HTMLElement;
    var dropMenu = document.getElementById("gallery_menu") as HTMLElement;
    var windowWidth = window.innerWidth;
    gallBtn.addEventListener('click', function() {
      dropMenu.classList.toggle("show");
    });
    dropMenu.addEventListener('click', function(hide) {
      dropMenu.classList.toggle("show");
    });
    if (windowWidth < 824) {
      setTimeout(function() {
      dropMenu.classList.toggle("show");
    }, 1000);
  }
    var currpage = PAGES[0];
    this.selectedPage = currpage;
    
  }

  ngOnChanges() { 
    var currpage = PAGES[0];
    this.selectedPage = currpage; 
  }
  
  onSelect(page: Page): void {
    this.selectedPage = page;
  }
  
  child: boolean = false;
}
