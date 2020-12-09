import React from 'react'
import { userDetails,userEdit } from './../../../api/user'
import {qiniuToken} from './../../../api/qiniuyun'
import { Form, Input, Radio, Upload, Modal } from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import until from './../../../untils/untils'
import './userinfo.less'
const { TextArea } = Input;
class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            confirmLoading: false,
            formList: {},
            api:'',
            upToken:'',
            imageUrl:''
        };
    };
    editid = '';
    // 数据请求
    setInfo = (val) => {
        console.log("选择的val:" + val);
        this.editid = val;
        console.log("选中的state：" + this.editid);
        userDetails(this).then(res => {
            // console.log(res);
            res.data.create_time = until.formateDate(res.data.create_time);
            this.setState({
                formList: res.data,
                visible: true,
                imageUrl:res.data.avatar
            })
            console.log(this.state.formList);

        })
    };
    
    componentDidMount() {
        qiniuToken(this).then(res => {
            console.log(res);
            this.setState({
                api:res.data.up_host,
                upToken:res.data.token
            })
        })
    };
    // 模态框按钮操作
    handleOk = () => {
        this.setState({
            confirmLoading: true,
        });
        console.log(this.state.formList);
        userEdit(this).then(res => {
            this.setState({
                confirmLoading: false,
                visible:false
            });
            this.props.editItem();
        })
    };
    // 图片上传的change
    handleChange =(file) => {
        console.log(JSON.stringify(file)); 
    }

    handleCancel = () => {
        this.setState({
            visible: false,
        });
    };
    render() {
        const { loading, imageUrl } = this.state;
        const uploadButton = (
            <div>
                {loading ? <LoadingOutlined /> : <PlusOutlined />}
                <div style={{ marginTop: 8 }}></div>
            </div>
        );
        const formChange = (changeVal, allVal) => {
            // console.log(allVal);
            this.setState({
                formList: allVal
            })
        }
        return (
            <div className="userCard">
                {this.state.visible && < Modal
                    className="modelCard"
                    title="编辑资料"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    confirmLoading={this.state.confirmLoading}
                    onCancel={this.handleCancel}
                    cancelText="取消"
                    okText="确定"
                    width={1000}
                >
                    <Form
                        className="from_box"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 7,
                        }}
                        initialValues={this.state.formList}
                        onValuesChange={formChange}
                    >
                        <Form.Item label="头像：" className="TextArea">
                            <Upload
                                name="file"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action={this.state.api+'?token='+this.state.upToken}
                                onChange={this.handleChange}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                        <Form.Item name='user_nicename' label="昵称：" className="form_item" >
                            <Input placeholder="昵称" />
                        </Form.Item>
                        <Form.Item name="city" label="城市：" className="form_item" >
                            <Input placeholder="城市" />
                        </Form.Item>
                        <Form.Item name="mobile" label="手机：" className="form_item">
                            <Input placeholder="手机" />
                        </Form.Item>
                        <Form.Item name="remark" label="备注：" className="form_item">
                            <Input placeholder="备注" />
                        </Form.Item>
                        <Form.Item label="性别：" name="sex" className="form_item">
                            <Radio.Group onChange={this.onChange} >
                                <Radio value={0}>保密</Radio>
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="代理：" name="is_agent" className="form_item">
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={0}>否</Radio>
                                <Radio value={1}>是</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="实名：" name="is_auth" className="form_item">
                            <Radio.Group onChange={this.onChange} value={this.state.value}>
                                <Radio value={0}>是</Radio>
                                <Radio value={1}>否</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="签名：" name="signature" className="TextArea">
                            <TextArea />
                        </Form.Item>
                        <Form.Item label="IP：" className="form_item">
                            <span>{this.state.formList.last_login_ip} </span>
                        </Form.Item>
                        <Form.Item label="注册时间：" className="form_item">
                            <span>{this.state.formList.create_time} </span>
                        </Form.Item>
                    </Form>
                </Modal>
                }
            </div>
        )
    }
}
export default UserInfo