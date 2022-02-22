import React, { Component } from 'react'

 class User extends Component {

constructor(props){
    super(props)
    this.state={
        accordionStatus:true
    }
}
accordion=()=>{
    this.setState({
        accordionStatus:!this.state.accordionStatus
    })
}

  render() {
      const{accordionStatus}=this.state
    return (
      <div className="container mt-3">
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button onClick={this.accordion} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Accordion Item #1
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                {
            accordionStatus?<div className="accordion-body">
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>:null
                }
                </div>
            </div>
            </div>
        </div>
     
    )
  }
}
export default User
