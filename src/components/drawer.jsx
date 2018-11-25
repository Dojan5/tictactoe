import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const drawerPose = ({
    init: { x: '-50%' },
    visible: { y: 0, opacity: 1 },
    hidden: { y: '100%', opacity: 0, delay: 300 }
})

const Drawr = styled(posed.div(drawerPose))`
    display: flex;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2);
    bottom: 0;
    left: 50%;
    width: 50vh;
    color: white;
    text-align: center;
    justify-items: center;
    align-items: center;
`

const Button = styled.button`
    
`

export default class Drawer extends Component {
    render() {
        const { resetGame, gameOver, winningPlayer } = this.props;
        return (
            <Drawr pose={this.props.pose}>
                <h2>Tic-Tac-Toe</h2>
                {gameOver && <Button onClick={resetGame}>Reset</Button>}
                {winningPlayer != null && <p>{winningPlayer} won!</p>}
            </Drawr>
        )
    }
}
