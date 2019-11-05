import React from 'react';
import Board from './Board';

class Game extends React.Component {
    state = {
        firstPlayer: 'X',
        secondPlayer: 'O',
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render = () => {
        const {firstPlayer, secondPlayer} = this.state;
        return (
            <div className="game">
                <section>
                <label htmlFor="firstPlayer">First Player Name
                    <input
                        type="text"
                        name="firstPlayer"
                        value={firstPlayer}
                        onChange={this.handleChange}
                    />
                </label><br/>
                <label htmlFor="secondPlayer">Second Player Name
                    <input
                        type="text"
                        name="secondPlayer"
                        value={secondPlayer}
                        onChange={this.handleChange}
                    />
                </label>
                </section>
                <hr />
                <div className="game-board">
                    <Board
                        xplayer={firstPlayer}
                        oplayer={secondPlayer}
                    />
                </div>
            </div>
        );
    }
}

export default Game;
