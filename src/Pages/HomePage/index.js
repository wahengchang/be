import React, { Component } from 'react'
import './index.css'
import { Row, Col} from 'antd'
import UpdateCategoryModal from '../../Components/HomePage/UpdateCategoryModal'

const {timestampToDateFormat} = require('../../lib/time')

/*eslint no-useless-constructor: 0*/
class HomePage extends Component {
  state = {
    isUpdateModalVisible: false,
    targetCategory: null
  }

  reset(){
    return this.setState({
      isUpdateModalVisible: false,
      targetCategory: null
    })
  }

  turnOffUpdateModal = (e) => {
    this.reset()
  }

  turnOnUpdateModal = (targetCategory) => (e) => {
    this.setState({
      isUpdateModalVisible: true,
      targetCategory
    })
  }

  onOk = (e) => {
    const {updateCategoryById} = this.props
    const {targetCategory} = this.state

    return this.validateForm().then((formValue)=>{
      const {name} = formValue
      return updateCategoryById(targetCategory.id, {name})
    }).then(()=>{
      this.reset()
    })
  }

  validateForm = () => {
    return new Promise((resolve, reject)=>{
      const form = this.formRef.props.form
      form.validateFields((err, values) => {
        if (err) {
          console.error(err)
          return reject()
        }
  
        console.log('Received values of form: ', values)
        form.resetFields()
        return resolve(values)
      })
    })
  }

  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }

  render() {
    const {categorys = []} = this.props
    const {isUpdateModalVisible, targetCategory} = this.state
    return (
      <div className="App">
        <h1> Cateogry </h1>
        {
          targetCategory && 
          <UpdateCategoryModal
            wrappedComponentRef={this.saveFormRef}
            visible = {isUpdateModalVisible}
            onCancel = {this.turnOffUpdateModal}
            onOk = {this.onOk}
            item = {targetCategory}
          />
        }

        {
          categorys.map((item, index) => {
            const {name, createdAt} = item
            return <Row gutter={10} key={index}>
                <Col span={4}> {index}</Col >
                <Col span={10}>
                  <div onClick={this.turnOnUpdateModal(item)}>{name}</div>
                </Col >
                <Col span={10}> {timestampToDateFormat(createdAt)} </Col >
              </Row>
            })
        }
      </div>
    )
  }
}

export default HomePage
