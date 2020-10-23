import { Component } from '@angular/core';
import { debug } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.sudoku();
  }
  sudoku() {
    const x = 0;
    const arraySolution = [
    [6, x, 4, 5, x, 3, x, 7, x],
    [x, x, x, x, x, x, 3, 1, x],
    [3, 5, x, x, x, 9, 2, x, x],
    [x, x, x, x, 2, x, 9, 3, 7],
    [x, x, 9, x, x, x, 4, x, 8],
    [4, 7, 2, x, x, x, x, x, x],
    [x, x, 1, x, x, x, x, 5, 2],
    [x, 4, 5, x, x, x, x, x, x],
    [x, 6, x, 8, x, 1, 7, x, x]
    ];

    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        const current_value = arraySolution[i][j];
        if (current_value) {
          // Check the line
          for (let x2 = 0; x2 < 9; x2++) {
              if (x2 != j && arraySolution[i][x2] == current_value) {
                console.error('ERROR => Check The Line')
                  return false;
            } 
          }
          // Check the Column
          for(let y2 = 0; y2 < 9; y2++){
            if(y2 != i && arraySolution[y2][j] == current_value){ 
              console.error('ERROR => Check The Column')
              return false
            }
          }
          // let startY = Math.floor(i / 3);
          // console.log(startY)
          // for (let y2 = startY; y2 < startY + 3; y2++){
          //   let startX = Math.floor(j / 3);
          //   for(let x2 = startX; x2 < startX + 3; x2++){
          //       if((x2 != i || y2 != i) && arraySolution[y2][x2] == current_value){
          //         console.error('shecdoma')
          //       }
          //   }
          // }
        }  
      }
    }
    console.log('Succses')
  }
}
