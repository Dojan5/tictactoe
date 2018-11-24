import React from 'react'
import styled from 'styled-components';

const Grid = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 50vh;
    height: 50vh;
    gap: 12px;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.2);
    justify-items: center;
    align-items: center;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.2);
`

export const Board = (props) => (
    <Grid>
        {props.children}
    </Grid>
);