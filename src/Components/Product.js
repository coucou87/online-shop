import React, { useState } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa';

const Wrapper = styled.div`
    display:inline-block;
    box-sizing:border-box;
    margin:auto;
    position:relative;
`
const Photo = styled.img`
    width:280px;
    height:200px; 
    position :relative;
    &:hover { 
        transition: all ease-out 0.6s;
        opacity:0.3;  
  }
`
const InnerIcon = styled.button`
    border:none;
    background-color:#ff8533;
    padding:10px 20px;
    padding-left:10px;
    font-weight:bold;
    margin-left:auto;
    font-size:normal;
    top:70%;
    left:-26px;
    transform: translateX(101%);
    cursor: pointer;
   position:absolute;
     opacity:0;
    transition: all ease-out 0.4s;
    &:hover { 
        opacity:1;
        color:white;
        transition: all ease-out 0.4s;
    }
`
const Card = styled.div`
    z-index:20;
    position:relative;
`
const Div = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Title = styled.h3`
    margin:0;
    padding:0;
`
const Price = styled.span`
    font-size:1.03em;
    font-weight:bold;
`
export default function Product({
    photo,
    title,
    price,
    addClick   
}
) {
    const [show, setShow] = useState(false)
    function handlerMouse() {
        setShow(true)
    }
    function handleOnClick(e){
        e.preventDefault()
        addClick()
    }
    return (
            <Wrapper>
                <Card>
                    <Photo
                        src={photo}
                        onMouseOver={handlerMouse}
                    />
                    {show &&
                        <InnerIcon onClick={(e)=>handleOnClick(e)}>
                            <FaShoppingCart /> ADD TO CART <FaShoppingCart />
                        </InnerIcon>
                    }
                </Card>
                <Div>
                    <Title>{title}</Title>
                    <Price>{price}</Price>
                </Div>
            </Wrapper>
    )
}