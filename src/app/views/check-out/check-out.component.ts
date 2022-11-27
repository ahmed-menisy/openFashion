import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.scss'],
})
export class CheckOutComponent {
  constructor(public dialog: MatDialog) {}
  totalPrice: number = 120 * 3;

  // Open Dialog
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
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
}

// Dialog
@Component({
  selector: 'dialog-content-example-dialog',
  template: `
    <section class="w-[60vw] py-10">
      <mat-dialog-content class="mat-typography">
        <h2 class="title !font-bondi !text-black uppercase">Payment success</h2>

        <img
          src="./assets/images/done.png"
          alt="done img"
          class="mx-auto my-4"
        />

        <div class="text-center">
          <h3 class="text-subtitle-1 !text-black">Your payment was success</h3>
          <p class="text-light text-body-sm space-x-3">
            Payment ID <span>15263541</span>
          </p>
        </div>
        <div class="line mt-2"></div>
      </mat-dialog-content>

      <mat-dialog-actions align="center">
        <div class="space-x-4 flex justify-center items-center">
          <button
            routerLink="/home"
            mat-button
            mat-dialog-close
            class="hover:text-orange-500 active:text-orange-900 px-4 py-2 uppercase transition-colors duration-300 border"
          >
            Back to home
          </button>

          <button
            mat-button
            [mat-dialog-close]="true"
            cdkFocusInitial
            class="hover:bg-orange-500 active:bg-orange-900 px-4 py-2 text-white uppercase transition-colors duration-300 bg-black"
          >
            Submit
          </button>
        </div>
      </mat-dialog-actions>
    </section>
  `,
})
export class DialogContentExampleDialog {}
