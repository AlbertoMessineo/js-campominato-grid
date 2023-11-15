'use strict';

// FUNCTIONS:
// board generator:

function boardGen(){
const elementBoard = document.querySelector('div.board');

    for( let i= 1; i < 101; i++){

        const elementCell = document.createElement('div');    
        elementBoard.append(elementCell);
        elementCell.classList.add("cell");
    }
}
boardGen();