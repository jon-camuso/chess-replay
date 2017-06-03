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

var whiteKing = document.createElement('div');
whiteKing.className = 'whiteKing';
var whiteQueem = document.createElement('div');
whiteQueen.className = 'whiteQueen';
var whiteBishop = document.createElement('div');
whiteBishop.className = 'whiteBishop';
var whiteKnight = document.createElement('div');
whiteKnight.className = 'whiteKnight';
var whiteRook = document.createElement('div');
whiteRook.className = 'whiteRook';
var whitePawn = document.createElement('div');
whitePawn.className = 'whitePawn';

container.appendChild(chessBoard);
container.appendChild(whiteKing);
