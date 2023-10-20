import React from "react"
import { Input, Form, Button, Space } from "antd"

type Props = {
  onSearch: (id: string) => void
}

const UserSearch: React.FC<Props> = ({ onSearch }) => {
  const handleSearch = (values: { id: string }) => {
    onSearch(values.id)
  }

  return (
    <Form layout='inline' onFinish={handleSearch}>
      <Space>
        <Form.Item name='id'>
          <Input placeholder='Search by id' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Search
          </Button>
        </Form.Item>
      </Space>
    </Form>
  )
}

export default UserSearch
