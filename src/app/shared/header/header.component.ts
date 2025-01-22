import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  TranslateService,
  TranslatePipe,
  TranslateDirective,
} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslatePipe, TranslateDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isMenuOpen = false;
  currentLanguage = 'en';
  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
  }
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
}
