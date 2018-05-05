import React, { Component } from 'react'
import { signin, getCurrentUser } from '../../lib/firebase'
import './index.css'
import { Form, Input, Button } from 'antd'
const FormItem = Form.Item;

// read more ant: Form
// https://ant.design/components/form/

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      currentUser: null
    }
  }

  componentDidMount(){
    console.log(' ------ componentDidMount ------')
    getCurrentUser((user)=>{
      console.log(user)
      this.setState({currentUser: user})
    })
  }

  handleChange = (e, field) => {
    return this.setState({[field]: e.target.value})
  }

  handleSubmit = (e) => {
    console.log(' ------ handleSubmit ------')
    console.log(this.state)

    e.preventDefault()
    const {email, password} = this.state
    return signin(email, password)
    .then(user => {
      return console.log(user)
    })
  }

  render() {
    const {getFieldDecorator} = this.props.form
    const {currentUser} = this.state

    const RequiredField = ({field, placeholder}) => 
      getFieldDecorator(field,{
        onChange: (e) => this.handleChange(e, field),
        rules: [{
          required: true,
          message: `What\'s your ${field}?`
        }]
      })(
        <Input placeholder={placeholder} />
      )

    return (
      <Form onSubmit={this.handleSubmit.bind(this)}>
        <legend>A Stacked Form</legend>

        <FormItem >
          {RequiredField({field:'email', placeholder:'peter@peter.com'})}
        </FormItem>

        <FormItem >
          {RequiredField({field:'password', placeholder:'yourpassword'})}
        </FormItem>

        <button type="submit" className="">Sign in</button>
      </Form>
    )
  }
}

export default Form.create()(Login)
