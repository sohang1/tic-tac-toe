var table = document.querySelector('TABLE'),
    board = ' '.repeat(9).split(''),
    winMoves = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

//create playing field
table.innerHTML = ('<tr>' + '<td onmousedown="play(this)" onmouseup="this.style.border = \'\'">&nbsp;</td>'.repeat(3) + '</tr>').repeat(3);
//get all cells in the table
cells = [].slice.call(table.querySelectorAll('TD'));

//get value in board at position i
function val(i) {
	return board[i - 1];
}

function checkWinner() {
	var i, move;
	for (i in winMoves) {
		move = winMoves[i];
		console.log('checking winner');
		//if all the positions are filled and equal (winning move)
		if (val(move[0]) != ' ' && val(move[0]) == val(move[1]) && val(move[1]) == val(move[2])) {
			//highlight winning move
			move.forEach(function(j) {
				cells[j - 1].style.backgroundColor = '#FFFF00';  //yellow
			});
			return val(move[0]);
		}
	} 
	//no winner
	return '';
}
