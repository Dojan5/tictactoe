import React from 'react'
import styled from 'styled-components';
import posed from 'react-pose';

const D = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.9 }
})

const Piece = styled(D)`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 24px -3px rgba(0, 0, 0, 0.6);
    background-color: ${props => props.color || "#DDD"}; 
`

export const Square = (props) => (
    <Piece>{props.children}</Piece>
);