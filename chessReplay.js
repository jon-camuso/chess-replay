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
    },
    blackQueen:{
        color: 'black',
        type: 'Queen',
        postion: {
            column: 'd',
            row: 8
        }
    },
    blackBishop1:{
        color: 'black',
        type: 'Bishop',
        postion: {
            column: 'f',
            row: 8
        }
    },
    blackBishop2:{
        color: 'black',
        type: 'Bishop',
        postion: {
            column: 'c',
            row: 8
        }
    },
    blackKnight1:{
        color: 'black',
        type: 'Knight',
        postion: {
            column: 'g',
            row: 8
        }
    },
    blackKnight2:{
        color: 'black',
        type: 'Knight',
        postion: {
            column: 'b',
            row: 8
        }
    },
    blackRook1:{
        color: 'black',
        type: 'Rook',
        postion: {
            column: 'h',
            row: 8
        }
    },
    blackRook2:{
        color: 'black',
        type: 'Rook',
        postion: {
            column: 'a',
            row: 8
        }
    },
    blackPawn1:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'a',
            row: 7
        }
    },
    blackPawn2:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'b',
            row: 7
        }
    },
    blackPawn3:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'c',
            row: 7
        }
    },
    blackPawn4:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'd',
            row: 7
        }
    },
    blackPawn5:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'e',
            row: 7
        }
    },
    blackPawn6:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'f',
            row: 7
        }
    },
    blackPawn7:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'g',
            row: 7
        }
    },
    blackPawn8:{
        color: 'black',
        type: 'Pawn',
        postion: {
            column: 'h',
            row: 7
        }
    }    
};