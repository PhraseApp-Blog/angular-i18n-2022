import {
    Inject,
    Component,
    LOCALE_ID,
  } from '@angular/core';
  
  @Component({
    selector: 'app-locale-switcher',
    templateUrl: './locale-switcher.component.html',
  })
  export class LocaleSwitcherComponent {
    locales = [
      { code: 'en', name: 'English' },
      { code: 'ar', name: 'عربي (Arabic)' },
      { code: 'es', name: 'Español' },
    ];
  
    constructor(
      @Inject(LOCALE_ID) public activeLocale: string
    ) {}
  
    onChange() {
      window.location.href = `/${this.activeLocale}`;
    }
  }
  