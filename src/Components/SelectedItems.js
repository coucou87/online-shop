import React , {useState} from 'react'
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

    const [num,setNum] = useState(number);


    function handleInc() {
        console.log(num)
        setNum(num+1)
    }
    function handleDec(id) {
        if (num === 0) {
            handleRemove(id);
        }
        setNum(num-1)
    }
    function handleRemove(id) {
        console.log(id)
        // console.log(selectedItems)
        // selectedItems.filter(item => item.id !== id)
    }

    // Teest shavad!!
    
    return (
        <Wrapper>
            {/*<img src={image}/>*/}
            <Photo src={image} />
            <Title>{title}</Title>
            <Price>{price}</Price>
            <Remove onclick={handleRemove}>Remove</Remove>
            <Count>
                <UpIcon onClick={handleInc}><BiChevronUp /></UpIcon>
                {num}
                <DownIcon onClick={handleDec}><BiChevronDown /></DownIcon>
            </Count>
        </Wrapper>
    )
}