import { Component } from '@angular/core';
@Component({
  selector: 'app-blog-blank',
  templateUrl: './blog-blank.component.html',
  styleUrls: ['./blog-blank.component.scss'],
})
export class BlogBlankComponent {
  selectGridOrList: string = 'grid';

  gridOrList(type: string): void {
    this.selectGridOrList = type;
  }
}
