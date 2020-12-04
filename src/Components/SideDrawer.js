import React from 'react'
import styled from 'styled-components'
import { AiFillCloseSquare } from 'react-icons/ai'
import SelectedItems from './SelectedItems'


const Wrapper = styled.div`
    width:30%;
    height:100%;
    padding:30px 15px;
    box-sizing: border-box;
    position:fixed;
    z-index:100;
    background-color:rgb(231, 226, 221);
    right:0;
    top:0;
      transition: all ease-out 0s;

    /* .open{
        transform: translateX(0)
    }
    .close{
        transform: translateX(100%)
    } */
`
const CloseIcon = styled.span`
font-size: 200%;
`
const MainTitle = styled.h2`
display:flex;
   justify-content:center;
`
const Div = styled.div``

const MinWrapper = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
`
const Text = styled.h3``
const Button = styled.button`
    border: none;
    outline:none;
    background-color:#ff8533;
    width:50%;
    padding:15px 30px;
`
export default function SideDrawer({ totalPrice, closeHandle, selectedItems }) {

    return (
        <Wrapper>
            <Div>
                <CloseIcon> <AiFillCloseSquare onClick={closeHandle} /> </CloseIcon>
                <MainTitle>YOUR CART</MainTitle>
            </Div>

            {  selectedItems.map(item => (
                <SelectedItems
                    key={item.id}
                    image={item.src}
                    title={item.title}
                    price={item.price}
                    number={item.number}

                />
            )
            )}

            <MinWrapper>
                <Text>Your Total:{totalPrice}</Text>
                <Button>CLEAR CART</Button>
            </MinWrapper>

        </Wrapper>

    )
}