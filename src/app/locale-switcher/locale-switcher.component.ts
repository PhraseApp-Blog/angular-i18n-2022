import {
  Inject,
  OnInit,
  Component,
  LOCALE_ID,
} from '@angular/core';

@Component({
  selector: 'app-locale-switcher',
  templateUrl: './locale-switcher.component.html',
})
export class LocaleSwitcherComponent implements OnInit {
  locales: { code: Locale; name: string }[] = [
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
