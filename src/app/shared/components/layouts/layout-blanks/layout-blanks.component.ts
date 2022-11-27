import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-blanks',
  templateUrl: './layout-blanks.component.html',
  styleUrls: ['./layout-blanks.component.scss'],
})
export class LayoutBlanksComponent {
  // scroll To Top
  goUp(): void {
    scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }
}
