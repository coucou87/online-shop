import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import {Link} from 'react-router-dom'

const Wrapper = styled.div`
  display:grid;
  grid-template-columns: 280px 280px 280px 280px;
  grid-template-rows: 200px 200px; 
  column-gap: 25px;
  row-gap: 80px;
  justify-content:center;
  flex-wrap:wrap;
`
const Title = styled.h1`
  display:flex;
  padding:60px;
  justify-content:center;
  color:#333333;
`
export default function Products({ products, addClickHandle }) {
       
    return (
        <div>
            <Title>OUR PRODUCTS</Title>
            <Wrapper>
                {products.map(item => {
                    return (
                        <Link key={item.id} to={`/detail/${item.id}`}>
                            <Product
                                addClick={()=>addClickHandle(item.id)}
                                id={item.id}
                                title={item.title}
                                photo={item.src}
                                price={item.price}
                                number={item.number}  
                            />
                        </Link>
                    )
                }
                )}
            </Wrapper>
        </div >
    )
}