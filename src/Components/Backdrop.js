import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:100%;
  height:100%;
  position:fixed;
  left:0;
  top:0;
  background-color: rgba(240, 157, 85, 0.5);
  z-index:50;
`
export default function Backdrop(){
    return(
        <Wrapper></Wrapper>
    )
}