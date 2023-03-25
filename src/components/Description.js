import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components

const Description = (props) => {
    return(
        <>
        <Message>{props.MessageContent}</Message>
        
        </>
    );


}

export default Description;

const Message = styled.h3`
text-align: center;
background-color: green;`