import React, { useContext } from "react"
import { Form, Input, Button, Checkbox, message } from "antd"
import { UserContext } from "../../context/context/UserContext"
import { useNavigate } from "react-router-dom"

const LoginPage: React.FC = () => {
  const Navigate = useNavigate()
  const { users } = useContext(UserContext) // 使用 context 获取用户数据
  const { setIsLoggedIn } = useContext(UserContext)
  const onFinish = (values: any) => {
    console.log("Received values of form: ", values)

    const matchingUser = users.find(
      (user) =>
        user.username === values.username && user.password === values.password
    )

    if (matchingUser) {
      setIsLoggedIn(true)
      Navigate("/Users")
      message.success({
        content: "Logged in successfully!",
        duration: 3,
      })
    } else {
      message.error({
        content: "Invalid username or password.",
        duration: 2,
      })
    }
  }

  return (
    <Form name='login' initialValues={{ remember: true }} onFinish={onFinish}>
      <Form.Item
        name='username'
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input placeholder='Username' />
      </Form.Item>

      <Form.Item
        name='password'
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password placeholder='Password' />
      </Form.Item>

      <Form.Item name='remember' valuePropName='checked'>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Log in
        </Button>
      </Form.Item>
    </Form>
  )
}

export default LoginPage
