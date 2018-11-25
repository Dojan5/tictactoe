import React from 'react'
import styled from 'styled-components';
import posed from 'react-pose';

const mutePose = ({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0.6 }
})

const MButton = styled(posed.div(mutePose))`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 36px;
    color: white;
    width: 76px;
    height: 76px;
    top: 0;
    left: 0;
`

export const MuteButton = (props) => (
    <MButton>
        <div onClick={props.toggleMute}>
            {props.muted ? (
                <i className="fas fa-volume-mute"></i>
            ) : (
                    <i className="fas fa-volume-up"></i>
                )}

        </div>
    </MButton>
);