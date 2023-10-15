import React from "react"
import { Input, Form, Button } from "antd"

type Props = {
  onSearch: (name: string) => void
}

const UserSearch: React.FC<Props> = ({ onSearch }) => {
  const handleSearch = (values: { name: string }) => {
    onSearch(values.name)
  }

  return (
    <Form layout='inline' onFinish={handleSearch}>
      <Form.Item name='name'>
        <Input placeholder='Search by name' />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Search
        </Button>
      </Form.Item>
    </Form>
  )
}

export default UserSearch
