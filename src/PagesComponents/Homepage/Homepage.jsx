import React, { Component } from 'react'
import styled from 'styled-components'
import Axios from 'axios'


const Container = styled.div`
height:100%;
display:flex;
flex-direction: row;
justify-content: space-around;
font-size: 2em;
align-items: center;
background-color: #262626;
    @media (max-width: 768px) {
    flex-direction: column;
    font-size: 1.5em;
    }
    @media (max-width: 460px) {
        font-size:1em;
    }
`
const WeatherDiv = styled.div`
display:flex;
flex-direction: column;
color:white;
width: 35%;
letter-spacing:1.5px;
@media (max-width: 768px) {
    width: 40%;
    margin-bottom: 20%;
}

`
const Info = styled.div`   
width:35%;
color:whitesmoke;
letter-spacing:1.5px;
 @media (max-width: 768px) {
     margin-top: 20%;
     width:40%;
 }
`

export default class Homepage extends Component {

    state = {
        error: null,
        isLoaded: false,
        items: []
    }
    componentDidMount() {
        Axios.get('https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=88bac9bad27ef4c1b75a083fc1b1df57')
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data.main.temp
                    })
                }
            )
    }

    render() {
        return (
            <Container>
                <Info><p>Hej, mitt namn är Carl Lindgren & jag är webbutvecklare.</p></Info>
                <WeatherDiv>
                    <p> I stockholm är det just nu {Math.round((this.state.items - 273.15) * 10) / 10}℃</p>
                </WeatherDiv>
            </Container>
        )
    }
}