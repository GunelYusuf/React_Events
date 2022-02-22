import React, { Component } from 'react'
import ProductItem from './ProductItem'
class Products extends Component {
    constructor(props){
        super(props)
    }
  render() {
      const{products}=this.props
    return (
      <div>
        {
            products.map(product=>{
                return(
                    <ProductItem key={product.id} {...product}/>
                
            )})
        }
      </div>
    )
  }
}

export default  Products