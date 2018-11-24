import React from 'react'
import styled from 'styled-components';
import posed from 'react-pose';

const gridPose = ({
    visible: {
        y: '0px',
        opacity: 1,
        delayChildren: 750,
        staggerChildren: 50
    },
    hidden: {
        y: '-100%',
        opacity: 0,
        delay: 300
    }
});

const Grid = styled(posed.div(gridPose))`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    width: 50vh;
    height: 50vh;
    gap: 12px;
    padding: 12px;
    background-color: rgba(0, 0, 0, 0.3);
    justify-items: center;
    align-items: center;
    box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 0.4);
`

export const Board = (props) => (
    <Grid pose={props.pose}>
        {props.children}
    </Grid>
);