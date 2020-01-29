import React from 'react'
import styled from 'styled-components'
import Quire from '../../pictures/portfoliop1.png'
import Pfolio from '../../pictures/portfoliop2.png'

const StyledDiv = styled.div`

    height: 100vh;
    width:100%;
    background-color: #262626;
    
`
const Container = styled.div`
display:flex;
justify-content: space-around;
margin-top:4%;
    img{
        border: 1px solid aliceblue;
        height: 350px;
    }
    @media (max-width: 824px) {
            img{
                height: 300px;
                margin-bottom:10px;
            }
        flex-direction: column;
        align-items:center;
      }
     @media (max-width: 824px) {
            img{
                margin-top: 20%;
                height: 150px;

            }
     }


`
const portfolio = () => {
    return (
        <StyledDiv>
            <Container>
                <a href={'https://github.com/carlindgren/fe19tp1_Gutenberg'}> <img src={Quire} alt={'Quire'} /></a>
                <a href={'https://github.com/carlindgren/portfolio'}><img src={Pfolio} alt={'portfolio'} /></a>
            </Container>
        </StyledDiv>
    )
}

export default portfolio 