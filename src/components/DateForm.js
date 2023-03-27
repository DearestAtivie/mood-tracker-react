import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components



function DateForm (props) {
    return (
      <>
        <StyledDiv>
          <Date type="text" placeholder="MM.DD.YYYY"></Date>
        </StyledDiv>
     </>
    );
  }

  
  export default DateForm;

  const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 70%;
    padding: 10px;
    background-color: aquamarine;
    margin: 0px auto 20px auto;
    `

    const Date = styled.input`
    background-color: white
    `