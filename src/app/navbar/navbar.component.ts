import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  home: string = $localize`Home`;
  about: string = $localize`About`;

  constructor() {}

  ngOnInit(): void {}
}
