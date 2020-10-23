import { Component } from '@angular/core';
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
          for (let x = 0; x < 9; x++) {
              if (x != j && arraySolution[i][x] == current_value) {
                console.error('ERROR => Check The Line')
                  return false;
            } 
          }
          // Check the Column
          for(let y = 0; y < 9; y++){
            if(y != i && arraySolution[y][j] == current_value){ 
              console.error('ERROR => Check The Column')
              return false
            }
          }
          // let startY = Math.floor(i / 3);
          // console.log(startY)
          // for (let y = startY; y < startY + 3; y++){
          //   let startX = Math.floor(j / 3);
          //   for(let x = startX; x < startX + 3; x++){
          //       if((x != i || y != i) && arraySolution[y][x] == current_value){
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
