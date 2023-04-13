import { getByDisplayValue } from '@testing-library/react';
import React from 'react'; //1 step
import styled from 'styled-components'; // 2 step but make sure you use npm install --save styled-components

function NiceButton () {
    return (
        <Button type="button" onClick={getByDisplayValue}>
            Submit
        </Button>
    );


}

export default NiceButton

const Button = styled.button`
background-color: beige
`