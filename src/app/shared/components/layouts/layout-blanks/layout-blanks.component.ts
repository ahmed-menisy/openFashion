import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-layout-blanks',
  templateUrl: './layout-blanks.component.html',
  styleUrls: ['./layout-blanks.component.scss'],
})
export class LayoutBlanksComponent {
  constructor(private _Renderer2: Renderer2) {}
  // scroll To Top
  goUp(): void {
    scrollTo({
      top: 0,
      behavior: 'auto',
    });
    this._Renderer2.removeClass(document.body, 'overflow-hidden');
  }
}
