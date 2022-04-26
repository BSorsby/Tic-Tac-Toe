import { useState } from 'react';
import './App.css';

function App() {
    const [status, setStatus] = useState(`Player X's Turn`)
    const [player, setPlayer] = useState('X')
    const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
    const [player1Score, setPlayer1Score] = useState(0)
    const [player2Score, setPlayer2Score] = useState(0)
    const [draws, setDraws] = useState(0)

    const switchPlayer = () => {
        if (player === 'X') {
            setPlayer('O')
            setStatus(`Player O's Turn`)

        } else {
            setPlayer('X')
            setStatus(`Player X's Turn`)
        }
    }

    const drawGame = (b) => {
        for (let i = 0; i < 9; i++) {
            if (b[i] === "") return false;
        }
        return true;
    }

    const winGame = (b) => {

        if (b[0] !== '' && b[0] === b[1] && b[1] === b[2]) {
            return true;
        } else if (b[3] !== '' && b[3] === b[4] && b[4] === b[5]) {
            return true;
        } else if (b[6] !== '' && b[6] === b[7] && b[7] === b[8]) {
            return true;
        } else if (b[0] !== '' && b[0] === b[3] && b[3] === b[6]) {
            return true;
        } else if (b[1] !== '' && b[1] === b[4] && b[4] === b[7]) {
            return true;
        } else if (b[2] !== '' && b[2] === b[5] && b[5] === b[8]) {
            return true;
        } else if (b[0] !== '' && b[0] === b[4] && b[4] === b[8]) {
            return true;
        } else if (b[2] !== '' && b[2] === b[4] && b[4] === b[6]) {
            return true;
        }
        return false;
    }

    const restartGame = () => {
        switchPlayer()
        setBoard(["", "", "", "", "", "", "", "", ""])
    }

    const handleCellClick = (e) => {
        const index = parseInt(
            e.target.getAttribute('data-cell-index')
        );
        if (board[index] !== '') return;
        const newBoard = [...board]
        newBoard[index] = player
        setBoard(newBoard)
        if (winGame(newBoard) === true) {
            if (player === 'X') {
                setStatus(`Player X wins!`)
                setPlayer1Score(player1Score + 1)

            } else {
                setStatus(`Player O wins!`)
                setPlayer2Score(player2Score + 1)
            }
            return;
        }
        if (drawGame(newBoard) === true) {
            setStatus(`It's a draw!`)
            setDraws(draws +1)
            return;
        }

        switchPlayer()
    }

    return (
        <div className="App">
            <h1>Tic Tac Toe</h1>
            <div class="scores">
                <h2>League</h2>
                <p>Player X Score: {player1Score}</p>
                <p>Player O Score: {player2Score}</p>
                <p>Total draws: {draws}</p>
            </div>

            <div class="gameBoard">
                <div data-cell-index="0" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[0]}</div>
                <div data-cell-index="1" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[1]}</div>
                <div data-cell-index="2" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[2]}</div>
                <div data-cell-index="3" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[3]}</div>
                <div data-cell-index="4" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[4]}</div>
                <div data-cell-index="5" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[5]}</div>
                <div data-cell-index="6" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[6]}</div>
                <div data-cell-index="7" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[7]}</div>
                <div data-cell-index="8" class="cell" onClick={winGame(board) ? null : handleCellClick}>{board[8]}</div>
            </div>
            <h2 class="gameStatus" id={drawGame(board) || winGame(board) ? "big" : null}>{status}</h2>
            <button onClick={restartGame}>Restart</button>
        </div>
    );
}

export default App;
