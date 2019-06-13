import React, { Component } from 'react';
import Child from './component/child'
class Home extends Component {
    state={
        name:''
    }
    handleVal=(e)=>{
        this.setState({
            name: e.target.value  
        })
      console.log(e.target.value)
    }
 render(){
     const { name} =this.state
     return(
         <div>
             <span>父组件</span>
             <span>父名字{name}</span>
             <br/>
             <br/>
             <span>子组件</span>
             <Child handleVal={this.handleVal}></Child>
        </div>
     )
 }
}
export default Home;