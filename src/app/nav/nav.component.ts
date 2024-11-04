import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  animateOnScroll = false;
  componentBottomPosition = 100; 
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    if (scrollPosition >= this.componentBottomPosition) {
      this.animateOnScroll = true;
    } else {
      this.animateOnScroll = false;
    }
  }
}
