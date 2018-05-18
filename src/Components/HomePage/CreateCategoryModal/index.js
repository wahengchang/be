import React, { Component } from 'react'
import './index.css'
import { Form, Input, Modal } from 'antd'
const FormItem = Form.Item
// Modal React example:
// https://github.com/ant-design/ant-design/blob/master/components/form/demo/form-in-modal.md

class UpdateCategoryModal extends Component {
    componentWillMount(){
        console.log(' ------- componentWillMount -------')
    }

    render() {
        const {onCancel, onOk, visible, form} = this.props
        const { getFieldDecorator } = form
        return (
            <Modal
                visible={visible}
                title="Create Category"
                okText= "Create"
                onCancel={onCancel}
                onOk={onOk}
            >
                <Form layout="vertical">
                    <FormItem label="Name">
                    {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input the title of Cateogy!' }],
                    })(
                        <Input />
                    )}
                    </FormItem>
                </Form>
            </Modal>

        )
    }
}


export default Form.create()(UpdateCategoryModal)
