'use strict';

// FUNCTIONS:
// board generator:

function boardGen(){
const elementBoard = document.querySelector(div.board);
elementBoard.classList.add('board');

    for( let i= 1; i <100; i++){

        const elementCell = document.createElement('div');    
        elementBoard.append(elementCell);
        elementBox.classList.add("cell");
    }
}
boardGen();