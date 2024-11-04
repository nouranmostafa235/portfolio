import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('targetElement') targetElement!: ElementRef; 
  animateOnScroll = false;
  componentBottomPosition = 0; 

  ngAfterViewInit() {
    const rect = this.targetElement.nativeElement.getBoundingClientRect();
    this.componentBottomPosition = rect.top + window.scrollY + rect.height;
  }

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
