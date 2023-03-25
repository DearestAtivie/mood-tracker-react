import React from 'react';
import styled from 'styled-components';

const Title = (props) => {
    return(
        <>
        <HeaderText>{props.HeaderContent}</HeaderText>
        
        </>
    );


}


const HeaderText = styled.h1`
text-align: center;
background-color: blue;
`

export default Title;