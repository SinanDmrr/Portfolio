import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService, TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isMenuOpen = false;
  currentLanguage = 'en';
  isMainPage: boolean = true;

  constructor(
    private translate: TranslateService,
    private router: Router,
  ) {}
  onBurgerMenuClick(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.toggleBodyScroll();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.toggleBodyScroll();
  }

  private toggleBodyScroll(): void {
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
  }

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const urlWithoutFragment = event.url.split('#')[0];
        this.isMainPage =
          urlWithoutFragment === '/' || urlWithoutFragment === '';
      }
    });
  }
}
