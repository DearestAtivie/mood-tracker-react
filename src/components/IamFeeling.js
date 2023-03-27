import React from 'react';
import styled from 'styled-components';

const IamFeeling = (props) => {
    return(
        <>
        <FourthMessage>{props.MessageContent}</FourthMessage>
        
        </>
    );


}



export default IamFeeling

const FourthMessage = styled.h3`
text-align: center;
background-color: red;`

