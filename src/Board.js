import React from 'react';
import Square from './Square';

class Board extends React.Component {
    state = {
        squares: [],
        xIsNext: null,
    }

    componentDidMount = () => {
        this.resetGame()
    }

    calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                const winningPiece = squares[a];
                const { xplayer, oplayer } = this.props;

                const winner = (winningPiece === 'X') ? xplayer : oplayer

                return winner;
            }
        }
        return null;
    }

    handleClick = (index) => {
        const { squares, xIsNext } = this.state;
        if (squares[index]) return;
        if (this.calculateWinner(squares)) return;

        const newSquares = squares.slice();
        newSquares[index] = xIsNext ? 'X' : 'O';
        this.setState({
            squares: newSquares,
            xIsNext: !xIsNext,
        });
    }

    resetGame = () => {
        this.setState({
            squares: Array(9).fill(null),
            xIsNext: true
        })
    }

    render = () => {
        const { squares, xIsNext } = this.state;
        const { xplayer, oplayer } = this.props;
        const winner = this.calculateWinner(squares);
        const status = winner ? `Winner ${winner}` : `Next Player: ${xIsNext ? `X (${ xplayer })` : `O (${ oplayer })`}`;

        const allTheSquares = squares.map((square, index) =>
            <Square
                key={`square${index}`}
                value={squares[index]}
                onClick={() => this.handleClick(index)}
            />
        )

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board">
                    {allTheSquares}
                </div>
                <button disabled={!winner && squares.includes(null)} onClick={this.resetGame}>Reset Game</button>
            </div>
        );
    }
}

export default Board;
