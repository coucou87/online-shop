import React from 'react'
import styled from 'styled-components'
import Product from './Product'

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 280px 280px 280px 280px;
  grid-template-rows: 200px 200px; 
  column-gap: 25px;
  row-gap: 80px;
  justify-content:center;
`
const Title = styled.h1`
  display:flex;
  padding:60px;
  justify-content:center;
  color:#333333;
`
export default function Products(
    {
        products,
        addClickHandle
    }
) {

    return (
        <div>
            <Title>OUR PRODUCTS</Title>
            <Wrapper>
                {products.map(item => {
                    return (
                        <Product
                            addClick={() => addClickHandle(item.id)}
                            key={item.id}
                            title={item.title}
                            photo={item.src}
                            price={item.price}
                            number={item.number}
                        />
                    )
                }
                )}
            </Wrapper>
        </div >
    )
}