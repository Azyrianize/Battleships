'use strict'

	let start = document.getElementById('start');
	let menu = document.getElementById('menu');
	let game = document.getElementById('game');
	let back = document.getElementById('back');
	
	const myBoard = document.getElementById("myBoard");
	const enemyBoard = document.getElementById("enemyBoard");
	const boardElements = document.querySelectorAll(".board_element");
			
	start.addEventListener('click', startGame);
	back.addEventListener('click', backMenu);
	
	function startGame(){
		menu.style.display = "none";
		game.style.display = "block";	

		
		//myBoard.className = "myBoard";
		//enemyBoard.className = "enemyBoard";
		myBoard.classList.add("board");
		enemyBoard.classList.add("board");
		
		for(let i = 0; i < 10; i++){
			for(let j = 0; j < 10; j++){
				const div = document.createElement('div');
				div.className = "board_element";
				div.dataset.x = j;
				div.dataset.y = i;
				
				myBoard.appendChild(div);		
			}
		}
		
		for(let i = 0; i < 10; i++){
			for(let j = 0; j < 10; j++){
				const div = document.createElement('div');
				div.className = "board_element";
				div.dataset.x = j;
				div.dataset.y = i;
				
				enemyBoard.appendChild(div);		
			}
		}
	}
	
	function backMenu(){
		menu.style.display = "block";
		game.style.display = "none";	
		
		myBoardElements.forEach(boardElement => {boardElement.remove()});
		myBoard.classList.remove("myBoard");
		
		enemyBoardElements.forEach(boardElement => {boardElement.remove()});
		enemyBoard.classList.remove("enemyBoard");
	}