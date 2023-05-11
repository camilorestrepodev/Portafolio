import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements AfterViewInit {
  isMenuOpen: boolean = false;
  @ViewChild('sidenav') sidenav: ElementRef | undefined;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.classList.toggle('menu-open');
    if (this.isMenuOpen && this.sidenav) {
      this.sidenav.nativeElement.focus();
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  }

  ngAfterViewInit(): void {
    if (this.isMenuOpen && this.sidenav) {
      this.sidenav.nativeElement.focus();
    }
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  closeMenuOnLinkClick(): void {
    this.closeMenu();
  }

  scrollTo(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
