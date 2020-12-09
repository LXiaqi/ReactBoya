import React from 'react'


class Info extends React.Component {
    render() {
        return (
                <div>
                    this is Info Page 这个演示页面
                   动态路由的值：{this.props.match.params.mainId}
                </div>
        )
    }
}
export default Info