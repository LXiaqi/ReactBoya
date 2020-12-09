import React from 'react'
import { Card, Button, Modal } from 'antd'
import './modals.less'

class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ModalText: '弹框_1内容',
            visible: false,
            confirmLoading: false,
            visible2: false,
            loading: false
        }
    }
    render() {
        return (
            <div className="modals_box">
                <Card title="基础模态框" className='card-wrap'>
                    <Button type="primary" onClick={this.showModal}>Opem（异步）</Button>
                    <Button type="primary" onClick={this.showModal2}>自定义页脚</Button>
                    <Button type="primary">顶部弹框</Button>
                    <Button type="primary">水平垂直居中</Button>
                </Card>
                {/* 异步弹框 */}
                <Modal
                    title='标题'
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    confirmLoading={this.state.confirmLoading}
                >
                    <p>{this.state.ModalText}</p>
                </Modal>
                {/* 自定义页脚 */}
                <Modal
                    visible={this.state.visible2}
                    title="标题2"
                    onOk={this.handleOk2}
                    onCancel={this.handleCancel2}
                    footer={[
                        <Button key="Return" onClick={this.handleCancel2}>
                            返回
                      </Button>,
                        <Button key="Submit" type="primary" loading={this.state.loading} onClick={this.handleOk2}>
                            确定
                      </Button>,
                    ]}
                >
                    <p>Some contents...</p>

                </Modal>
            </div>
        )
    }
    // 点击显示弹框
    showModal = () => {
        this.setState({
            visible: true
        })
    }
    // ok 按钮
    handleOk = () => {
        this.setState({
            confirmLoading: true,
            ModalText: '更改之后的内容'
        })
        this.timer = setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
                ModalText: '更改之后的内容'
            })
        }, 1500)
    }
    // 关闭按钮
    handleCancel = () => {
        this.setState({
            visible: false
        })
    }

    // 弹框2
    // 点击显示弹框
    showModal2 = () => {
        this.setState({
            visible2: true
        })
    }
    // ok 按钮
    handleOk2 = () => {
        this.setState({
            loading: true
        })
        this.timer2 = setTimeout(() => {
            this.setState({
                loading: false,
                visible2: false
            })
        }, 1500)
    }
    // 关闭按钮
    handleCancel2 = () => {
        this.setState({
            visible2: false
        })
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
        clearTimeout(this.timer2);
    }
}
export default Modals 
