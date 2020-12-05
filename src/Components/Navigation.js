import React, { useState } from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa';
import { MdMenu } from 'react-icons/md'

const Wrapper = styled.div`
    width: 100%;
    height:60px;
    background-color:#ececec; 
`
const Logo = styled.img`
`
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
export default function Navigation({ toggleShow }) {
    return (
        <>
            <Wrapper>
                <Nav>
                    <Menu><MdMenu /></Menu>
                    <Logo src="https://comfy-house2.vercel.app/images/logo.svg" />
                    <Cart><FaShoppingCart onClick={toggleShow} /></Cart>
                </Nav>

            </Wrapper>
        </>
    )
}