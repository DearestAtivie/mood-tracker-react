import React from 'react';
import styled from 'styled-components';

const On = (props) => {
    return(
        <>
        <ThirdMessage>{props.MessageContent}</ThirdMessage>
        
        </>
    );


}

export default On;

const ThirdMessage = styled.h3`
text-align: center;
background-color: pink;`

