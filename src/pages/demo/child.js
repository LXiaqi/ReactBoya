import React from 'react'
import './child.less'
class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    };
 
    render() {
        return (
            <div>
                <span className='cont' style={{fontSize:12,fontWeight:700}}>这个是组组件， 测试子组件的生命周期：</span>
                <p>{this.props.name}</p>
            </div>
        ) 
    };
}
export default Child
