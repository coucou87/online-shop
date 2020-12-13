import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md'

const Wrapper = styled.div`
    width: 100%;
    height:60px;
    background-color:#ececec; 
`
const Logo = styled.img``
const Menu = styled.span`
    font-size: 50px;
`
const Cart = styled.span`
    font-size: 25px;
`
const Nav = styled.div`
    display:flex;
    justify-content:space-around;
    align-items:center;
`
const StatusNumber = styled.div`
   width: 20px;
   height: 20px;
   position: relative;
   top: -15px;
   right: -35px;
   border-radius: 5px;
   display: inline-block;
   background-color: orange;
   color: white;
   font-size: 16px;
   text-align: center;

 
`
export default function Navigation({ toggleShow, length }) {
    return (<>
            <Wrapper >
                <Nav >
                    <Menu><MdMenu /></Menu>
                    <Logo src="https://comfy-house2.vercel.app/images/logo.svg" />
                    <Cart >
                        <StatusNumber>{length}</StatusNumber>
                        <FaShoppingCart onClick={toggleShow}/>
                    </Cart>
                </Nav>
            </Wrapper>
        </>
    )
}