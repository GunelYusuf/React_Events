import React, { Component } from 'react'

 class ProductItem extends Component {
     constructor(props){
         super(props)
     }
  render() {
      const {id,name,description,price,image,title}=this.props
    return (

        <div className='container'>
            <div className='row d-flex justify-content-center'>
            <div className="card" style={{width: "18rem"}} >
            <img className="card-img-top" src={image} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
            </div>
        </div>

    )
  }
}
export default ProductItem
