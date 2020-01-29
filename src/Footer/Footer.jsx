import React from 'react';
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    color:white;
    height: 150px;
    position: relative;
    bottom: 0px;
    background-color:#3b3b3b;
    border-top:1px solid white;
        @media (max-width: 768px){ 
    flex-direction: column;
    align-items: center;
    }
    `
const Contact = styled.div`
color: white;
font-size:1.0em; 
letter-spacing:1.2px;

`
const List = styled.ul`
display:flex;
flex-direction: column;
list-style-type: none;

`
const footer = () => {
    return (
        <Container >
            <Contact>
                <List>
                    <li>Kontakta mig på :</li>
                    <li>tel. 073 939 84 54</li>
                    <li>mail. Carlindgren@outlook.com</li>
                </List>
            </Contact>
            <Contact><p><a href="https://github.com/carlindgren" target="_blank">< FaGithub /> Github</a></p></Contact>
        </Container>
    );
}

export default footer