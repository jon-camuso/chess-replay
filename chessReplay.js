let container = document.querySelector('#chessReplayApp');
let chessBoard = document.createElement('table');

const chessBoardTileLength = 8;

let rowIndex = 0;
let columnIndex  = 0;

for(rowIndex; rowIndex < chessBoardTileLength; ++rowIndex){
    let chessBoardRow = chessBoard.insertRow(rowIndex);
    chessBoardRow.id = chessBoardTileLength - rowIndex;
    for(columnIndex = 0; columnIndex < chessBoardTileLength; ++columnIndex){
         chessBoardRow.insertCell(columnIndex);
    }
}

container.appendChild(chessBoard);