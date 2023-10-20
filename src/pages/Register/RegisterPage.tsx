import React, { useContext } from "react"
import { Form, Input, Button } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import { UserContext } from "../../context/context/UserContext"

interface RegisterPageProps {
  switchToLogin: () => void
}

const RegisterPage: React.FC<RegisterPageProps> = ({ switchToLogin }) => {
  const { setUsers } = useContext(UserContext)

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)

    if (setUsers) {
      setUsers((prevUsers) => [...prevUsers, values])
      switchToLogin()
    }
  }

  return (
    <Form name='register' onFinish={onFinish} autoComplete='off'>
      <Form.Item
        name='username'
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
          {
            pattern: /^[^\s]*$/,
            message: "Username cannot contain spaces!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className='site-form-item-icon' />}
          placeholder='Username'
        />
      </Form.Item>

      <Form.Item
        name='email'
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input placeholder='Email' type='email' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
          {
            min: 6,
            message: "Password should be at least 6 characters!",
          },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className='site-form-item-icon' />}
          placeholder='Password'
        />
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit' style={{ width: "100%" }}>
          Register
        </Button>
      </Form.Item>
    </Form>
  )
}

export default RegisterPage
