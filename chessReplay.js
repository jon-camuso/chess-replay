var container = document.querySelector('#chessReplayApp');
var chessBoard = document.createElement('table');

const chessBoardTileLength = 8;
const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']

var rowIndex = 0;
var columnIndex  = 0;

for(rowIndex; rowIndex < chessBoardTileLength; ++rowIndex){
    var chessBoardRow = chessBoard.insertRow(rowIndex);
    chessBoardRow.id = chessBoardTileLength - rowIndex;
    for(columnIndex = 0; columnIndex < chessBoardTileLength; ++columnIndex){
        var chessBoardCell = chessBoardRow.insertCell(columnIndex);
        chessBoardCell.id = columnLetters [columnIndex] + chessBoardRow.id;
    }
}


container.appendChild(chessBoard);