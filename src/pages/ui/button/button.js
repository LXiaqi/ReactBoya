import React from 'react'
import { Card, Button, Radio } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, CloudDownloadOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './button.less'
class Buttons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            size:'small'
        }
    };
    render() {
        return (
            <div className="button_box">
                <Card title="基础按钮" className="btoon_basics">
                    <Button type="primary">Imooc</Button>
                    <Button >Imooc</Button>
                    <Button type="dashed">Imooc</Button>
                    <Button type="danger">Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮" className="btoon_basics">
                    <Button shape="circle">圆</Button>
                    <Button icon={<SearchOutlined />}>搜索</Button>
                    <Button type="primary" icon={<PlusOutlined />}>创建</Button>
                    <Button type="primary" icon={<EditOutlined />}>编辑</Button>
                    <Button type="danger" icon={<DeleteOutlined />}>删除</Button>
                    <Button type="primary" icon={<CloudDownloadOutlined />}>下载</Button>
                </Card>
                <Card title="Loading按钮" className="btoon_basics">
                    <Button type="primary" shape="circle" loading={this.state.loading}></Button>
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading}>点击加载</Button>
                    <Button shape="circle" loading={this.state.loading}></Button>
                    <Button type="danger" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="btoon_basics">
                    <Button.Group>
                        <Button type="primary" icon={<LeftOutlined />}>返回</Button>
                        <Button type="primary">前进{<RightOutlined/>}</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="btoon_basics">
                    <Radio.Group value={this.state.size} onChange={this.handleChange}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Imooc</Button>
                    <Button size={this.state.size}>Imooc</Button>
                    <Button type="dashed" size={this.state.size}>Imooc</Button>
                    <Button type="danger" size={this.state.size}>Imooc</Button>
                </Card>
            </div>
        )
    }
    handleCloseLoading = () => {
        this.setState({
            loading: false
        })
    }
    handleChange =(e) => {
        this.setState({
            size:e.target.value
        })
    }
}
export default Buttons