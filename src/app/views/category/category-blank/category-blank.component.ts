import { Component } from '@angular/core';
import { Closes } from 'src/app/closes';

@Component({
  selector: 'app-category-blank',
  templateUrl: './category-blank.component.html',
  styleUrls: ['./category-blank.component.scss'],
})
export class CategoryBlankComponent {
  selectGridOrList: string = 'grid';

  // Closes Name
  closessName: Closes[] = [{ name: 'Women' }, { name: 'All apparel' }];

  // Grid Or List View
  gridOrList(type: string): void {
    this.selectGridOrList = type;
  }

  // Add Chips
  // add(event: any): void {
  //   const value = (event.value || '').trim();

  //   // Add our closessName
  //   if (value) {
  //     this.closessName.push({ name: value });
  //   }

  //   // Clear the input value
  //   event.chipInput!.clear();
  // }

  // Remove Chips

  remove(closes: Closes): void {
    const index = this.closessName.indexOf(closes);

    if (index >= 0) {
      this.closessName.splice(index, 1);
    }
  }
}
