import React from 'react'
import { BiChevronDown } from 'react-icons/bi'
import { BiChevronUp } from 'react-icons/bi'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:block;
    margin-right:auto;
`
const Title = styled.h4``
const Price = styled.h5``
const Remove = styled.p`
    cursor: pointer;
`
const Count = styled.span`
    position:absolute;
    left:auto;
`
const UpIcon = styled.span``
const DownIcon = styled.span``
const Photo = styled.img`
    width:30%;
    height:30%;
`

export default function SelectedItems({ image, title, price, number, selectedItems }) {
    // function handleInc() {
    //     number++
    // }
    // function handleDec(id) {
    //     if (number = 1) {
    //         selectedItems.filter(item => item.id !== id)
    //     }
    //     number--
    // }
    // function handleRemove(id) {
    //     selectedItems.filter(item => item.id !== id)
    // } 

    // Teest shavad!!
    
    return (
        <Wrapper>
            <Photo>{image}</Photo>
            <Title>{title}</Title>
            <Price>{price}</Price>
            <Remove onclick={handleRemove}>Remove</Remove>
            <Count>
                <UpIcon onClick={handleInc}><BiChevronUp /></UpIcon>
                {number}
                <DownIcon onClick={handleDec}><BiChevronDown /></DownIcon>
            </Count>
        </Wrapper>
    )
}