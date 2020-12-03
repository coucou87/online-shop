import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import {BiChevronUp} from 'react-icons/bi'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:block;
    margin-right:auto;
`
const Title= styled.h4``
const Price= styled.h5``
const Remove= styled.p``
const Count= styled.span`
    position:absolute;
    left:auto;
`
const UpIcon= styled.span``
const DownIcon= styled.span``
const Photo= styled.img`
    width:30%;
    height:30%;
`

export default function SelectedItems({image, title, price, number}){
    return(
        <Wrapper>
            <Photo>{image}</Photo>
            <Title>{title}</Title>
            <Price>{price}</Price>
            <Remove>Remove</Remove>
            <Count>
                <UpIcon><BiChevronUp/></UpIcon>
                        {number}
                <DownIcon><BiChevronDown/></DownIcon>
            </Count>
        </Wrapper>       
    )
}