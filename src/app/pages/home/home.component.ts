import { Component, OnInit } from '@angular/core';
import { Cabinet } from '../../cabinet.model';
import { CabinetService } from '../../cabinet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cabinets: Cabinet[] = [];

  constructor(private cabinetService: CabinetService) {}

  ngOnInit(): void {
    this.cabinets = this.cabinetService.all();
  }

  altFor(cabinet: Cabinet): string {
    return `Image of ${cabinet.name}`;
  }
}
