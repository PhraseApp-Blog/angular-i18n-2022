import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  home: string = $localize`Home`;
  about: string = $localize`About`;
}
