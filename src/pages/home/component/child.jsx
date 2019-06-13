import React, { Component } from 'react'
class Child extends Component {
   render(){
       return(
           <div>
               child
               <input placeholder="输入父级名字" onChange={this.props.handleVal}/>
            </div>
       )
   }
}
export default Child