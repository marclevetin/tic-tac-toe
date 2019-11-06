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
                            placeholder="enter a name"
                            value={firstPlayer}
                            onChange={this.handleChange}
                        />
                    </label><br/>
                    <label htmlFor="secondPlayer">Second Player Name
                        <input
                            type="text"
                            name="secondPlayer"
                            placeholder="enter a name"
                            value={secondPlayer}
                            onChange={this.handleChange}
                        />
                    </label>
                </section>
                <hr />
                <section className="game-board">
                    <Board
                        xplayer={firstPlayer}
                        oplayer={secondPlayer}
                    />
                </section>
            </div>
        );
    }
}

export default Game;
