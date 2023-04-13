import React from 'react';
import styled from 'styled-components';


function EmojiYay(){

    return(
    <>
        <EmojiDiv>
        <EmojiButton type="submit">😀</EmojiButton>
        <EmojiButton type="submit">🤣</EmojiButton>
        <EmojiButton type="submit">🥰</EmojiButton>
        <EmojiButton type="submit">😔</EmojiButton>
        <EmojiButton type="submit">😡</EmojiButton>
        </EmojiDiv>
    </>
)}




export default EmojiYay

const EmojiButton = styled.button`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width: 20%;
padding: 10px;
background-color: aquamarine;
margin: 0px auto 20px auto;
background-color: blue
`
const EmojiDiv = styled.div`

`
