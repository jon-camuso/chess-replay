var container = document.querySelector('#chessReplayApp');
var chessBoard = document.createElement('table');

const chessBoardTileLength = 8;

var rowIndex = 0;
var columnIndex  = 0;

for(rowIndex; rowIndex < chessBoardTileLength; ++rowIndex){
    var chessBoardRow = chessBoard.insertRow(rowIndex);
    chessBoardRow.id = chessBoardTileLength - rowIndex;
    for(columnIndex = 0; columnIndex < chessBoardTileLength; ++columnIndex){
         chessBoardRow.insertCell(columnIndex);
    }
}

container.appendChild(chessBoard);