import React, { Component } from 'react';
import styled from 'styled-components';
import posed from 'react-pose';

const drawerPose = ({
    visible: { opacity: 1 },
    hidden: { opacity: 0, delay: 300 }
})

const Drawr = styled(posed.div(drawerPose))`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2);
    bottom: 0;
    width: 50vh;
    margin: 10px;
    color: white;
    text-align: center;
`

export default class Drawer extends Component {
    render() {

        return (
            <Drawr pose={this.props.pose}>
                <h2>Tic-Tac-Toe</h2>
            </Drawr>
        )
    }
}
