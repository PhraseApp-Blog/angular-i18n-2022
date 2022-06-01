import {
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
})
export class LocaleSwitcherComponent implements OnInit {
  locales = [
    { code: 'en-CA', name: 'English' },
    { code: 'ar', name: 'عربي (Arabic)' },
  ];

  constructor(
    @Inject(LOCALE_ID) public activeLocale: string
  ) {}

  ngOnInit(): void {}

  onChange() {
    window.location.href = `/${this.activeLocale}`;
  }
}
