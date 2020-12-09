import React from 'react'
import Child from './child'
import {Button} from 'antd'
class Life extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            
        } 
    }
    render() {
        return (
            <div style={{padding:10}}>
                <p>React 生命周期</p>
                <Button onClick={this.handleAdd}>中秋快乐</Button>
                <p>{this.state.count}</p>
                <Child name={this.state.count}/>
            </div>
        )
    }
    handleAdd=() => {
      this.setState({
          count:this.state.count+1
      })
    }
}

export default Life