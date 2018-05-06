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
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
      
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var introBlocks = document.getElementById('intro_container') as HTMLElement;

    setTimeout(function() {
      introBlocks.classList.add('finnish_enter');
    }, 2000);

    var aboutBtn = document.getElementById('aboutIntro') as HTMLElement;
    var aboutTop = document.getElementById('about-top') as HTMLElement;
    var aboutBottom = document.getElementById('about-bottom') as HTMLElement;
    var workBtn = document.getElementById('workIntro') as HTMLElement;
    var workTop = document.getElementById('work-top') as HTMLElement;
    var workBottom = document.getElementById('work-bottom') as HTMLElement;
    var contactBtn = document.getElementById('contactMe') as HTMLElement;
    var contactCont = document.getElementById('greeting') as HTMLElement;
    var introContainer = document.getElementById('intro_container') as HTMLElement;
    var goToAbout = document.getElementById('goToAbout') as HTMLElement;
    var footerIntro = document.getElementById('footerIntro') as HTMLElement;
    var greetingBtn = document.getElementById('contactMe') as HTMLElement;
    var greetingAnimate = document.getElementById('greetingReveal') as HTMLElement;

    aboutBtn.addEventListener('click', function() {
      aboutBtn.classList.add('aboutExit');
      workBtn.classList.add('fadeout');
      contactCont.classList.add('fadeout');
      introContainer.classList.add('fadeout');
      footerIntro.classList.add('fadeout');
      aboutTop.style.transform = "translateX(0px)";
      aboutBottom.style.transform = "translateX(0px)";
        
    });
    workBtn.addEventListener('click', function() {
      workBtn.classList.add('workExit');
      aboutBtn.classList.add('fadeout');
      contactCont.classList.add('fadeout');
      introContainer.classList.add('fadeout');
      footerIntro.classList.add('fadeout');
      workTop.style.transform = "translateX(0px)";
      workBottom.style.transform = "translateX(0px)";
    });
    greetingBtn.addEventListener('click', function() {
      workBtn.classList.add('fadeout');
      aboutBtn.classList.add('fadeout');
      introContainer.classList.add('fadeout');
      footerIntro.classList.add('fadeout');
      contactCont.classList.add('greetingAnimate');

    });
  }


}
