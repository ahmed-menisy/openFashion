import {
  Component,
  HostListener,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { Router } from '@angular/router';
import { ShareDataService } from './../../shared/services/share-data.service';
declare const $: any;
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  totalPrice: number = 120 * 3;
  showCart: boolean = false;
  showSearch: boolean = false;
  showMenu: boolean = false;
  keywords: string[] = [];
  search = new FormControl(null);

  constructor(
    private _Renderer2: Renderer2,
    public _Router: Router,
    private _ShareDataService: ShareDataService
  ) {}

  @ViewChild('navBar') navBar!: ElementRef;

  // Listner scroll
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if (scrollY > 50) {
      this.navBar.nativeElement.classList.add('bg-white', 'shadow');
    } else {
      this.navBar.nativeElement.classList.remove('bg-white', 'shadow');
    }
  }

  ngOnInit(): void {
    this._ShareDataService.keywords.subscribe({
      next: (response) => {
        this.keywords = response;
      },
    });
  }

  // Price Add
  sumPrice(sum: number): void {
    this.totalPrice = this.totalPrice + sum;
  }

  // Price Sub
  subPrice(sub: number): void {
    this.totalPrice = this.totalPrice - sub;
  }

  // Show Cart
  open(type: string): void {
    if (type === 'cart') this.showCart = true;
    else if (type === 'search') this.showSearch = true;
    else if (type === 'menu') this.showMenu = true;
    this._Renderer2.addClass(document.body, 'overflow-hidden');
  }

  // close cart
  close(type: string): void {
    if (type === 'cart') this.showCart = false;
    else if (type === 'search') this.showSearch = false;
    else if (type === 'menu') this.showMenu = false;
    this._Renderer2.removeClass(document.body, 'overflow-hidden');
    this.totalPrice = 120 * 3;
  }

  // Remove Key word
  removeKeyword(keyword: string) {
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords.splice(index, 1);
      this._ShareDataService.keywords.next(this.keywords);
    }
  }

  // Add Key Word
  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      if (!this.keywords.includes(value)) {
        this.keywords.push(value);
        this._ShareDataService.keywords.next(this.keywords);
      }
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  //Show Menu
  showMenuBar(event: Event): void {
    console.log(event.currentTarget);
    // To Close All Tags And Changes Icon To Rotate
    $(event.currentTarget).parent().siblings().find('ul').slideUp();
    $(event.currentTarget)
      .parent()
      .siblings()
      .find('i')
      .removeClass('rotate-180');

    // To Open Curent Tag
    $(event.currentTarget).next().slideToggle();
    $(event.currentTarget).find('i').toggleClass('rotate-180');
  }

  //redirect to and close nav menu
  redirectTo(uri: string) {
    this._Router.navigate([`/${uri}`]);
    this.close('menu');
  }
}
