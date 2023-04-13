import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components
import NiceButton from './Button';



function FeelingForm (props) {
    return (
      <>
        <StyledDiv>
          <Feelings type="text" placeholder="Confused, Happy, Content, etc.."></Feelings>
          <NiceButton ButtonText="Submit"/>
        </StyledDiv>
     </>
    );
  }

  
  export default FeelingForm;

  const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 70%;
    padding: 10px;
    background-color: aquamarine;
    margin: 0px auto 20px auto;
    `

    const Feelings = styled.input`
    background-color: white
    `