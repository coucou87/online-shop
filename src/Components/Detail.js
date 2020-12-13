import React from 'react'
import styled from 'styled-components'
import { useParams } from "react-router-dom";
import Navigation from './Navigation';
import Header from './Header'
import { DataContext } from '../App'

const Wrapper = styled.div`
  position: relative;
  justify-content:center;
  
`
const Photo = styled.img`
  width:280px;
  height:200px; 
  position :relative;
  margin-top:3rem;
  &:hover { 
    transition: all ease-out 0.6s;
    opacity:0.3;  
  }
`
const Description = styled.div`
  margin: 3rem ;
`
const DescriptWrapper = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
`
const DetailWrapper = styled.div`
  display: flex;
  flex-direction:column;
  padding-left: 20px;
  justify-content:center;
  align-items:center;
`
const Title = styled.h2``
const Price = styled.h4``

export default function Details({ products }) {
  const { id } = useParams();
  const product = products.find((product) => +product.id === +id);
  // const match = useRouteMAtch()
  // const product = products.find((product) => +product.id === +match.params.id);
  return (
    <Wrapper>
      <Navigation />
      <Header />
      <DescriptWrapper>
        <Photo src={product.src} />
        <DetailWrapper>
          <Title>{product.title}</Title>
          <Price>{product.price}</Price>
        </DetailWrapper>
      </DescriptWrapper>
      <Description>{product.desc}</Description>
    </Wrapper>
  )
}