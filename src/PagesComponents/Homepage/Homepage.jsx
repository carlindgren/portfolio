import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
height:100%;
display:flex;
flex-direction: row;
background-color: #262626

`
const StyledDiv = styled.div`
    display:flex
    height:100%;
    width:100%;
    background-color: #262626;
`
const SpanL = styled.span`
color:aliceblue;
`
const SpanC = styled.span`
color: #f0b556;
`
const StyledH1 = styled.h1`
position:absolute;
right:0;
margin-right:20%;
transform: rotate(-45deg);
padding:0;
font-size: 200px;
font-weight: inherit;
letter-spacing:-25px;
transition: 1s ease;
    &:hover {
        cursor:default;
        transform: rotate(.9turn);
    }
    `
const Info = styled.div`   
margin-top: 150px;
margin-left:75px;
color:whitesmoke;
font-size:2em;
letter-spacing:1.5px
`
const homepage = () => {
    return (
        <Container>
            <Info><p>Hej, mitt namn är Carl Lindgren & jag är webbutvecklare.</p></Info>
            <StyledDiv>
                <StyledH1><SpanC>C</SpanC><SpanL>L</SpanL></StyledH1>
            </StyledDiv >
        </Container>


    )
}

export default homepage 