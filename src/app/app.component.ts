import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  xRowCss: any;
  xColumn: number;

  initialButton = 3

  title = 'angular-material-grids';

  listNumbers: number[] = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072, 262144, 524288, 1048576, 2097152, 4194304, 8388608, 16777216, 33554432, 67108864]

  constructor() {
    this.xColumn = 5;
    this.createColumnCss(this.xColumn, this.listNumbers.length)
    this.xRowCss = {'grid-template-rows': `repeat(${Math.ceil(this.listNumbers.length / this.xColumn)}, minmax(0, 1fr))`};
  }

  addNumbers = (): void => {
    this.listNumbers.push(this.initialButton)
    this.listNumbers.sort((a,b) => {return a-b})
    this.createColumnCss(this.xColumn, this.listNumbers.length)
    this.initialButton += this.initialButton

    console.log(this.xColumn)
  }

  columnChange = ( event: Event ) => {
    console.log(event)
    this.createColumnCss(this.xColumn, this.listNumbers.length)
  }

  createColumnCss = ( columns: number, listSize: number ): void => {
    this.xRowCss = {
      'grid-template-rows': `repeat(${Math.ceil(listSize / columns)}, minmax(0, 1fr))`,
      'grid-template-columns': `repeat(${columns}, minmax(0, 1fr));`
    };

  }

}
