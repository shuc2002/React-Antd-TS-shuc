import React, { useState } from "react"
import { Table, Button, Modal } from "antd"
import { User } from "./types"
import UserForm from "./UserForm"

type Props = {
  users: User[]
  onDelete: (index: number) => void
  onEdit: (index: number, updatedUser: User) => void
}

const UserList: React.FC<Props> = ({ users, onDelete, onEdit }) => {
  console.log("UserList component is rendering...") // <-- 查看组件是否重新渲染
  console.log("Users array:", users) // <-- 打印 users 数组以检查它的内容

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingUserIndex, setEditingUserIndex] = useState<number | null>(null)

  const handleEdit = (index: number) => {
    console.log("handleEdit called with index:", index) // <-- 查看handleEdit是否被调用并打印调用的索引
    setEditingUserIndex(index)
    setIsModalVisible(true)
  }

  const handleModalOk = (updatedUser: User) => {
    if (editingUserIndex !== null) {
      onEdit(editingUserIndex, updatedUser)
    }
    setIsModalVisible(false)
    setEditingUserIndex(null)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setEditingUserIndex(null)
  }

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      align: "center" as const,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Actions",
      key: "action",
      render: (_: any, record: User, index: number) => {
        console.log("Rendering actions for", record.name) // <-- 查看每行的操作按钮是否被渲染
        return (
          <span>
            <Button onClick={() => handleEdit(index)}>Edit</Button>
            <Button
              onClick={() => onDelete(index)}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </Button>
          </span>
        )
      },
    },
  ]

  return (
    <div>
      <Table dataSource={users} columns={columns} rowKey='name' />
      <Modal
        title='Edit User'
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {editingUserIndex !== null && (
          <UserForm
            userData={users[editingUserIndex]}
            onSubmit={handleModalOk}
          />
        )}
      </Modal>
    </div>
  )
}

export default UserList
