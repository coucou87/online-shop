import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import styled from 'styled-components'

const Wrapper = styled.div`
    margin-right:auto;
    position: relative;
    display:grid;
    grid-template-columns:  100px 1fr 3%;
    margin:1rem;
    justify-content: center;
    align-items: center;
`
const InnerWrapper = styled.div`
  display: grid;
  height: 100px;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 30px);
  align-items:end;
  margin-top:35px;
`
const Title = styled.h4``
const Price = styled.p`
    font-weight:bold;
`
const Remove = styled.p`
    cursor: pointer;
    color: gray;
`
const Count = styled.span`
    display:flex;
    flex-flow: column;
    text-align:center; 
`
const UpIcon = styled.span`
    color:orange;
`
const DownIcon = styled.span`
    color:orange;
`
const Photo = styled.img`
    width:80px;
    height:80px;
`
const MinWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center; 
`
export default function SelectedItem(
    {
        image,
        title,
        price,
        number,
        onClick,
        handleInc,
        handleDec
    }
) {
    return (
        <Wrapper>
            <Photo src={image} />
            <MinWrapper>
                <InnerWrapper>
                    <Title>{title}</Title>
                    <Price>{price}</Price>
                    <Remove onClick={onClick}>remove</Remove>
                </InnerWrapper>
                <Count>
                    <UpIcon onClick={handleInc}><BiChevronUp /></UpIcon>
                    {number}
                    <DownIcon onClick={handleDec}><BiChevronDown /></DownIcon>
                </Count>
            </MinWrapper>
        </Wrapper>
    )
}