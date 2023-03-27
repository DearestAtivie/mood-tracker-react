import React from 'react';
import styled from 'styled-components';

const Dropdown2 = (props) => {

    return(
        <>
        <EntireDD2Styling>
        <DD2Container>
            <DD2Header>Time of Day</DD2Header>
            <DD2ListContainer>
                <DD2List>
                    <DD2ListItem>Morning</DD2ListItem>
                    <DD2ListItem>Afternoon</DD2ListItem>
                    <DD2ListItem>Evening</DD2ListItem>
                </DD2List>
            </DD2ListContainer>
        </DD2Container>
        </EntireDD2Styling>   
                </>

    );
}

export default Dropdown2

const EntireDD2Styling = styled.div`
font-family: sans-serif;
background: #f0f0f0;
height: 100vh;
`;


const DD2Container = styled.div`
width: 10.5em;
  margin: 0 auto;
`;

const DD2Header = styled.div`
margin-bottom: 0.8em;
  padding: 0.4em 2em 0.4em 1em;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  font-weight: 500;
  font-size: 1.3rem;
  color: #3faffa;
  background: #ffffff;
`;

const DD2ListContainer = styled.div`
`;

const DD2List = styled.ul`
padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
`;

const DD2ListItem = styled.li`
list-style: none;
  margin-bottom: 0.8em;
`;