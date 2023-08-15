import React from 'react'
import Product from "../product/product"
import './products.css'

const Products = ({list}) => {   
  return ( 
  <section className='products'>
    {list.map((product=>(
        <h1 key={product.id}>
            <Product key={product.id} title={product.title} image={product.image} price={product.price}/>
        </h1>
    )))
    }
    </section>
  )
}

export default Products