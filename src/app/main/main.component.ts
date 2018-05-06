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
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    trigger('animateAbCon', [
      transition('* <=> *', [    
        query(':enter, :leave', style({ position: 'fixed', width:'100%' }), { optional: true }),
        group([ 
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateY(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(100%)' }))], {optional: true}),
        ]),
      ])
    ])
  ]
})
export class MainComponent implements OnInit {
 
  constructor() { }

  ngOnInit() {
    var introBtn = document.getElementById('backToIntro') as HTMLElement;
    var navigation = document.getElementById('navBar') as HTMLElement;
    var mainCont = document.getElementById('mainIntroBack') as HTMLElement;

    introBtn.addEventListener('click', function() {
      navigation.classList.add('navBarHide');
      mainCont.classList.add('mainHide');
    });
    var socBtn = document.getElementById('pick_socials');
    var socMenu = document.getElementById('socials_menu');
    
    socBtn.addEventListener('click', function() {
        if ( socBtn.classList.contains('closed') ) {
          socBtn.classList.remove("closed");
          socMenu.classList.remove("closed");
          socBtn.classList.add('open');
          socMenu.classList.add('open');
        } else if ( socBtn.classList.contains('open')) {
          socMenu.classList.add("closed");
          socMenu.classList.remove("open");
          socBtn.classList.add("closed");
          socBtn.classList.remove("open");
        }
    });
  }
  abcont: boolean = false;
}