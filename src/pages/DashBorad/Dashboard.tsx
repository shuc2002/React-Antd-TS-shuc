import React, { useState } from "react"
import {
  Button,
  Modal,
  Form,
  Input,
  Rate,
  Card,
  Statistic,
  Row,
  Col,
} from "antd"
import { MessageBoard, mockMessages } from "./MessageBoard"
import formatDate from "../../utils/formatDate"

const Dashboard: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [messages, setMessages] = useState(mockMessages) // 新添加的代码
  const [form] = Form.useForm()

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Received values of form: ", values)

        // 新添加的代码：将新留言添加到 messages 状态变量中
        const newMessage = {
          username: values.username,
          timestamp: formatDate(new Date()), // 生成当前时间的时间戳
          content: values.content,
          rating: values.rating,
        }
        setMessages((prevMessages) => [...prevMessages, newMessage])

        form.resetFields()
        setIsModalVisible(false)
      })
      .catch((info) => {
        console.log("Validate Failed:", info)
      })
  }
  const handleCancel = () => {
    setIsModalVisible(false)
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Row
        gutter={[16, 16]}
        style={{
          width: "100%",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title='Active Users' value={112893} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title='New Posts' value={1128} />
          </Card>
        </Col>
        <Col xs={24} sm={8}>
          <Card>
            <Statistic title='Feedbacks' value={893} />
          </Card>
        </Col>
      </Row>
      <Button
        type='primary'
        onClick={showModal}
        style={{ marginBottom: "20px" }}
      >
        Write a Message
      </Button>
      <MessageBoard messages={messages} />

      <Modal
        title='Write a Message'
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form} layout='vertical'>
          <Form.Item
            name='username'
            label='Username'
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name='content'
            label='Message'
            rules={[{ required: true, message: "Please write your message!" }]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item
            name='rating'
            label='Rating'
            rules={[{ required: true, message: "Please rate!" }]}
          >
            <Rate allowHalf />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
export default Dashboard
