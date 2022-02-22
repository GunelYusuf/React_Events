
import './App.css';
import Navbar from './components/Navbar';
import Event from './components/Event';
import User from './components/User';
import Products from './components/Products';
import { Component } from 'react';
import Axios from 'axios'
class App extends Component {

  constructor(props){
    super(props)
    this.state={
      products:[
     {
       id:1,
       name:"Product1",
       description:"Description1",
       price:55
     },
     {
      id:2,
      name:"Product2",
      description:"Description2",
      price:51
    },
    {
      id:3,
      name:"Product3",
      description:"Description3",
      price:58
    },
    {
      id:4,
      name:"Product4",
      description:"Description4",
      price:23
    }
    
      ],
      data:[]
    }
  }

  async GetProduct(){
    const data =  await Axios.get('https://fakestoreapi.com/products')
    this.setState({
      data : data.data
    })
    }
  


 render(){
   const{products,data}=this.state;
  return (
    <div className="App">
     <Navbar/>
     {/* <Event/> */}
     {/* <User/> */}
     <Products products={data} />
<button onClick={this.GetProduct.bind(this)}>Get Product</button>
    </div>
  );
 }
}

export default App;
