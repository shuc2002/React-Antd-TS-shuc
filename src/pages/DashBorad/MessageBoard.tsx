import React from "react"
import { Card, List, Avatar, Tooltip, Rate } from "antd"

interface Message {
  username: string
  timestamp: string
  content: string
  rating: number
}

interface MessageBoardProps {
  messages: Message[]
}

const mockMessages = [
  {
    username: "Alice",
    timestamp: "2023-10-18 12:30",
    content: "Great platform! Thanks for all the efforts.",
    rating: 4.5,
  },
  {
    username: "Bob",
    timestamp: "2023-10-18 13:15",
    content: "I've found a bug in the system. Please check.",
    rating: 3.5,
  },
  {
    username: "Charlie",
    timestamp: "2023-10-18 14:05",
    content: "Looking forward to the new features.",
    rating: 5,
  },
]

const MessageBoard: React.FC<MessageBoardProps> = ({ messages }) => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {messages.map((message, index) => (
        <Card key={index} style={{ width: 300 }}>
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{message.username[0]}</Avatar>}
              title={message.username}
              description={
                <>
                  <p>{message.content}</p>
                  <Tooltip title={message.timestamp}>
                    <span>{message.timestamp}</span>
                  </Tooltip>
                  <br />
                  <Rate value={message.rating} disabled allowHalf />
                </>
              }
            />
          </List.Item>
        </Card>
      ))}
    </div>
  )
}

export { MessageBoard, mockMessages }
