import { Component } from '@angular/core';

@Component({
  selector: 'app-search-view',
  templateUrl: './search-view.component.html',
  styleUrls: ['./search-view.component.scss'],
})
export class SearchViewComponent {
  selectGridOrList: string = 'grid';

  // Grid Or List View
  gridOrList(type: string): void {
    this.selectGridOrList = type;
  }
}
