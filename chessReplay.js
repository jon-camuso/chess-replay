var container = document.querySelector('#chessReplayApp');
var chessBoard = document.createElement('table');
var pieceMap = {};


const chessBoardTileLength = 8;
const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const colors = ['white', 'black'];
const pieces = ['King', 'Queen', 'Bishop', 'Knight', 'Rook', 'Pawn']

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

var colorIndex = 0;
var pieceIndex = 0;
for(colorIndex; colorIndex < colors.length; ++colorIndex){
    for(pieceIndex = 0; pieceIndex < pieces.length; ++pieceIndex){
        pieceMap[colors[colorIndex] + pieces[pieceIndex]] = {};
    }
}
console.log(JSON.stringify(pieceMap));

var whiteKing = document.createElement('div');
whiteKing.classList.add('piece', 'whiteKing');
var whiteQueen = document.createElement('div');
whiteQueen.classList.add('piece', 'whiteQueen');
var whiteBishop = document.createElement('div');
whiteBishop.classList.add('piece', 'whiteBishop');
var whiteKnight = document.createElement('div');
whiteKnight.classList.add('piece', 'whiteKnight');
var whiteRook = document.createElement('div');
whiteRook.classList.add('piece', 'whiteRook');
var whitePawn = document.createElement('div');
whitePawn.classList.add('piece', 'whitePawn');

var blackKing = document.createElement('div');
blackKing.classList.add('piece', 'blackKing');
var blackQueen = document.createElement('div');
blackQueen.classList.add('piece', 'blackQueen');
var blackBishop = document.createElement('div');
blackBishop.classList.add('piece', 'blackBishop');
var blackKnight = document.createElement('div');
blackKnight.classList.add('piece', 'blackKnight');
var blackRook = document.createElement('div');
blackRook.classList.add('piece', 'blackRook');
var blackPawn = document.createElement('div');
blackPawn.classList.add('piece', 'blackPawn');
 
container.appendChild(chessBoard);
container.appendChild(whiteKing);
