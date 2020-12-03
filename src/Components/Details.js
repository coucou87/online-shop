import React from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div``
const Photo = styled.img``
const Detail = styled.h2``
const Price = styled.h4``

export default function Details ({image, title,price}){
    let { topicId } = useParams();
    return(
        <>
        <h3>Requested topic ID: {topicId}</h3>;
        <Wrapper>
            <Photo src={image}></Photo>
            <Detail>{title}</Detail>
            <Price>{price}</Price>
        </Wrapper>
        </>
    )
}