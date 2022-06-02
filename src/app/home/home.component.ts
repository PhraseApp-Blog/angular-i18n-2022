import {
  Component,
  Inject,
  LOCALE_ID,
  OnInit,
} from '@angular/core';
import { Cabinet } from '../cabinet.model';
import { CabinetService } from '../cabinet.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  cabinets: Cabinet[] = [];

  constructor(
    private cabinetService: CabinetService,
    @Inject(LOCALE_ID) private activeLocale: Locale
  ) {}

  ngOnInit(): void {
    this.cabinets = this.cabinetService.allFor(
      this.activeLocale
    );
  }

  altFor(cabinet: Cabinet): string {
    return $localize`Image of ${cabinet.name}`;
  }
}
