import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components



function TimeofDay (props) {
    return (
      <>
        <StyledDiv>
          <Time type="text" placeholder="Time of Day"></Time>
        </StyledDiv>
     </>
    );
  }

  
  export default TimeofDay;

  const StyledDiv = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 70%;
    padding: 10px;
    background-color: aquamarine;
    margin: 0px auto 20px auto;
    `

    const Time = styled.input`
    background-color: white
    `