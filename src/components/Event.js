import React, { Component } from 'react'

 class Event extends Component {
     constructor(props){
         super(props)
         this.state={
             text:"",
             option:"",
             count:0,
             isOnline:"Online",
             status:true
         }
     }
     inputKeyUp=(e)=>{
        this.setState({
            text:e.target.value
        })
     }

      changeOption(number,e) {
          console.log(number);
         this.setState({
             option:e.target.value
         });
        }
        decrement=()=>{
            this.setState({
                count:this.state.count-1
            });
        }  
        increment=()=>{
            this.setState({
                count:this.state.count+1
            })
        }
        changeStatus=()=>{
            this.setState({
                isOnline:this.state.isOnline==="Online"?"Offline":"Online" ,
                status:!this.state.status
            })
        }
     

  render() {
      const {text,option,count,isOnline,status}=this.state;
    return (
      <div>
          <p>IsOnline: <span style={status?{color:"green"}:{color:"red"}}>{isOnline}</span></p>
          <p>Status {status.toString()}</p>
        <p>{text}</p>
        <input type="text" onKeyUp={this.inputKeyUp}/>
        <select onChange={this.changeOption.bind(this,5)}>
            <option>C#</option>
            <option>Js</option>
        </select>
        <p>{option}</p>
        <p>Count:{count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <br/>
        <button onClick={this.changeStatus}>change-status</button>
      </div>
    )
  }
}
export default Event