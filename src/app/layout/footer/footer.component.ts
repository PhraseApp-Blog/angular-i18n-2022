import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  phraseBlogUrl = 'https://phrase.com/blog';
  angularUrl = 'https://angular.io/';

  footerText = $localize`Demo companion app for
  <a href="${this.phraseBlogUrl}">Phrase blog</a>
  post.
  <a href="${this.angularUrl}">Made with Angular</a>.`;
}
