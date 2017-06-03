var container = document.querySelector('#chessReplayApp');
var chessBoard = document.createElement('table');
var pieceMap = {};


const chessBoardTileLength = 8;
const columnLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const colors = ['white', 'black'];
const pieceTypes = ['King', 'Queen', 'Bishop', 'Knight', 'Rook', 'Pawn']

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
    for(pieceIndex = 0; pieceIndex < pieceTypes.length; ++pieceIndex){
        pieceMap[colors[colorIndex] + pieceTypes[pieceIndex]] = {};
    }
}
console.log(JSON.stringify(pieceMap));
function buildPiece(name){
    var piece = document.createElement('div');
    piece.classList.add('piece', name);
    return piece;
}

for(var name in pieceMap){
    container.appendChild(buildPiece(name));
}
container.appendChild(chessBoard);


var startingPeices = {
    blackKing:{
        color: 'black',
        type: 'King',
        postion: {
            column: 'e',
            row: 8
        }
    }
}