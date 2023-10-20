import React from "react"
import { Form, Input, Select, Button } from "antd"
import { User } from "../../types/types"

type Props = {
  userData?: User
  onSubmit: (user: User) => void
}

const UserForm: React.FC<Props> = ({ onSubmit, userData }) => {
  const [form] = Form.useForm()

  const handleSubmit = (values: User) => {
    onSubmit(values)
    form.resetFields()
  }
  return (
    <Form
      form={form}
      layout='inline'
      onFinish={handleSubmit}
      initialValues={userData}
    >
      <Form.Item
        name='id'
        rules={[{ required: true, message: "Please input an ID!" }]}
      >
        <Input placeholder='ID' disabled={!!userData} />
      </Form.Item>
      <Form.Item
        name='name'
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input placeholder='Name' />
      </Form.Item>
      <Form.Item
        name='age'
        rules={[{ required: true, message: "Please input your age!" }]}
      >
        <Input placeholder='Age' type='number' />
      </Form.Item>
      <Form.Item
        name='gender'
        rules={[{ required: true, message: "Please select your gender!" }]}
      >
        <Select placeholder='Select Gender'>
          <Select.Option value='male'>Male</Select.Option>
          <Select.Option value='female'>Female</Select.Option>
          <Select.Option value='other'>Other</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          {userData ? "Update" : "Add"} User
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserForm
