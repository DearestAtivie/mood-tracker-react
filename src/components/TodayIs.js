import React from 'react';
import styled from 'styled-components';

const TodayIs = (props) => {
    return(
        <>
        <SecondMessage>{props.MessageContent}</SecondMessage>
        
        </>
    );


}

export default TodayIs;

const SecondMessage = styled.h3`
text-align: center;
background-color: pink;`
