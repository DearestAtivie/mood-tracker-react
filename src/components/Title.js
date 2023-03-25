import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return(
        <>
        <HeaderText>{props.HeaderContent}</HeaderText>
        
        </>
    );


}


export default Title;

const HeaderText = styled.h1`
text-align: center;
background-color: blue;
`

