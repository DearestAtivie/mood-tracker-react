import React from 'react';
import styled from 'styled-components';

const Title = () => {
    return(
        <>
        <HeaderDiv>
        <HeaderText>Know Thyself</HeaderText>
        <Message>A mood tracking app designed to better help you identify your emotions</Message>
        {/* <SecondMessage>Today Is</SecondMessage> */}
        </HeaderDiv>
        </>
    );


}


export default Title;

const HeaderText = styled.h1`
text-align: center;
background-color: blue;
`

const Message = styled.h2`
text-align: center;
background-color: green;`

// const SecondMessage = styled.h3`
// text-align: center;
// background-color: pink;`

const HeaderDiv = styled.div`
background-color: beige;
width: 50%;
margin: auto;
`
