import React, {useState} from "react";
import styled from "styled-components";



//create the template of the objects that will later
//be in the messages array that hold all the messages
function InputMessage(){
    const [messageInfo, setMessageInfo] = useState({
        todayis: '',
        text: '',
        mood: ''


    }); 

    const[messages, setMessages] = useState([]); //brakets denote that an array will be placed in this object. it will hold our messages.

    const handleInputChange = (event) => { //
        setMessageInfo({

            ...messageInfo,
            [event.target.name]: event.target.value //.name is calling out the name class in the input
            // .value is whatever is entered in for that name in the input tag
        });
            console.log(`This is the input change: ${event.target.name}: ${event.target.value} `);

    };


    const handleClick = (event) => { //
        setMessageInfo({

            ...messageInfo,
            mood: event.target.value //.name is calling out the name class in the input
            // .value is whatever is entered in for that name in the input tag
        });
            console.log(`This is the input change: mood: ${event.target.value} `);

    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        const newMessage = {
            todayis: messageInfo.todayis,
            text: messageInfo.text,
            mood: messageInfo.mood,

        };
        setMessages([...messages, newMessage]);
        setMessageInfo({
            todayis: '',
            text: '',
            mood: ''


        } )

       

    }

// const button = document.getElementsByTagName('button');

// button.addEventListener('click', function onClick() {
//   button.style.backgroundColor = 'green';
//   button.style.color = 'beige';
// });

    return(
        <>
            <form onSubmit={handleSubmit}>
                <StyledDiv>
                <Haych3>Today Is</Haych3>
                <label>
                    <input type="datetime-local" 
                    name="todayis" 
                    value={messageInfo.todayis}
                    onChange={handleInputChange}/>
                </label>
                </StyledDiv>
                <StyledDiv>
                <Haych3>I am Feeling...</Haych3>
                <button type="button"
                name="mood" 
                value={'Happy'}
                onClick={handleClick}>😀</button>

                <button type="button"
                name="mood"
                value={'Funny'}
                onClick={handleClick}>🤣</button>

                <button type="button"
                name="mood"
                value={'In Love'}
                onClick={handleClick}>🥰</button>

                <button type="button" 
                name="mood" 
                value={'Sad'}
                onClick={handleClick}>😔</button>

                <button type="button" 
                name="mood" 
                value={'Angry'}
                onClick={handleClick}>😡</button>
                <h3> or </h3>
                <label>
                    <input type="text" 
                    name="text" 
                    placeholder="Type your feelings here"
                    value={messageInfo.text}
                    onChange={handleInputChange}/>
                </label>
                <StyledDiv></StyledDiv>
                <button type="submit">Submit</button>
                </StyledDiv>
            </form>
            {messages.map((message, index) =>
            <div key={index}>
                <h4>{message.todayis}</h4>
                <p>{message.text}</p>
                <p>{message.mood}</p>
            </div>
            )


            }
        </>

    );
}


export default InputMessage

const StyledDiv = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width: 70%;
padding: 10px;
background-color: aquamarine;
margin: 0px auto 20px auto;
`

const Haych3 = styled.h3`
text-align: center;
background-color: pink;
`

// {/* <form>
//   <label for="birthdaytime">Birthday (date and time):</label>
//   <input type="datetime-local" id="birthdaytime" name="birthdaytime">
// </form> */}