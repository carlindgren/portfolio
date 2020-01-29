import React, { useState } from 'react'
import styled from 'styled-components'


const StyledDiv = styled.div`
    color:white;
    height: 100vh;
    width:100%;
    background-color: #262626;
    font-size:2em;
    @media (max-width: 768px) {
        font-size:1.5em;
    }
`
const ButtonContainer = styled.div`
display:flex;
margin-left:25%;
margin-top:5%;
width: 50%; 
@media (max-width: 768px) {
    margin-top:10%;
}
@media (max-width: 500px) {
    margin-top:25%; 
}
`
const DisplayContainer = styled.div`
width: 80%
margin-left:10%;
display:flex;
justify-content: space-around;

`

const RandomLi = styled.li`
list-style-type: none;
color: aliceblue;
width: 200px;
border-radius: 5px;
text-align: center;
box-shadow: 2px 3px #888888;
border:1px solid grey;
margin: 3% 3% 3% 3%;
@media (max-width: 768px) {
    width: 150px;
`
const Link = styled.a`
color: aliceblue;
width: 200px;
border-radius: 5px;
text-align: center;
box-shadow: 2px 3px #888888;
border:1px solid grey;
margin: 3% 3% 3% 3%;
@media (max-width: 768px) {
    width: 150px;

`

const jsSkill = [{ 'skill': 'REACT' },
{ 'skill': 'OOP' },
{ 'skill': 'JSON' }]

const cssSkill = [{ 'skill': 'SASS' },
{ 'skill': 'LESS' },
{ 'skill': 'styled-components' }]

const htmlSkill = [{ 'skill': 'SEO' },
{ 'skill': 'Accessibility' }]

//{skillset.map((sk, skidx) => <RandomDiv key={skidx}> {sk.skill}</RandomDiv>)}

export default function Skills() {

    const [count, setCount] = useState(0);
    console.log(count, setCount)

    return (
        <StyledDiv>
            <ButtonContainer>
                <Link style={count === 1 ? { color: '#f0b556' } : null} onClick={() => setCount(1)}>javaScript</Link>
                <Link style={count === 2 ? { color: '#f0b556' } : null} onClick={() => setCount(2)}>CSS</Link>
                <Link style={count === 3 ? { color: '#f0b556' } : null} onClick={() => setCount(3)}>HTML</Link>
            </ButtonContainer>
            <DisplayContainer>
                {count === 1 ? jsSkill.map((sk, skidx) => <RandomLi key={skidx}> {sk.skill}</RandomLi>) : null}
                {count === 2 ? cssSkill.map((sk, skidx) => <RandomLi key={skidx}> {sk.skill}</RandomLi>) : null}
                {count === 3 ? htmlSkill.map((sk, skidx) => <RandomLi key={skidx}> {sk.skill}</RandomLi>) : null}
            </DisplayContainer>
        </StyledDiv>
    )
}







// <Js onClick={() => setCount = 1} />
// {/* <Html name={this.state.id} onClick={() => this.setState({ id: 2 })} />
//                     <Css name={this.state.id} onClick={() => this.setState({ id: 3 })} /> */}