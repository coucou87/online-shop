import React from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  background-image: url("./DATA/IMAGES/hero-bcg.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: calc(100vh - 60px);
  display:flex;
  box-sizing:border-box;
  overflow-x:hidden;
  position:relative;
  justify-content:center;
    align-items: center;
 

`
const Banner = styled.div`
  background: rgba(255, 255, 255, 0.8);
 padding:1.5em;
  position: absolute;
  text-align:center;
  justify-content:center;
  display:inline-block;
`
const Text = styled.h1`
    font-size: 3.4rem;
    color: rgba(0, 0, 0, 0.8);
    margin-bottom: 3rem;
    box-sizing: border-box;
    text-align: center; 
    padding-top:0;
   color:#333333; 
`

const Button = styled.button`
    padding: 1rem 3rem;
    text-transform: uppercase;
    font-size: 1rem;
    cursor: pointer;
    background-color: #ff944d;
    border: none;
`
export default function Header() {
    return (
        <>
            <Wrapper>
                    <Banner>
                        <Text>FURNITURE COLLECTION</Text>
                       <Button>SHOP NOW</Button>
                    </Banner>
            </Wrapper>
        </>
    )
}