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
    height: 86px;
`

const pressablePose = ({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.6 }
})

const Button = styled(posed.div(pressablePose))`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 86px;
    font-size: 3rem;
    color: lime;
    border: 0px;
    outline: 0px;
    text-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
`

const PlayerIndicator = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    height: 100%;
    color: ${props => props.color || "#EEE"};
    width: 86px;
    text-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
`

const StatusField = styled.div`
    flex: 1;
`

export default class Drawer extends Component {
    render() {
        const { resetGame, winningPlayer, currentPlayer } = this.props;
        return (
            <Drawr pose={this.props.pose}>
                <PlayerIndicator color={currentPlayer}>
                    {currentPlayer === "Magenta" && <i className="fas fa-times"></i>}
                    {currentPlayer === "Orange" && <i className="far fa-circle"></i>}
                </PlayerIndicator>
                <StatusField>
                    {winningPlayer === null && <h3>Tic-Tac-Toe</h3>}
                    {winningPlayer != null && <h3>{winningPlayer} won!</h3>}
                </StatusField>
                <Button onClick={resetGame}><i class="fas fa-redo-alt"></i></Button>
            </Drawr>
        )
    }
}
