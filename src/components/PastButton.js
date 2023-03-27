import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components

function PastButton (props) {
    return (
        <LastButton type="button">
            Click Here to View Past Submissions
        </LastButton>
    );


}

export default PastButton

const LastButton = styled.button`
background-color: beige
`