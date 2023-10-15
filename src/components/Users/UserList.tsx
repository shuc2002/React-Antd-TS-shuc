import React, { useState } from "react"
import { Table, Button, Modal } from "antd"
import { User } from "./types"
import UserForm from "./UserForm"

type Props = {
  users: User[]
  onDelete: (userId: string) => void
  onEdit: (userId: string, updatedUser: User) => void
}

const UserList: React.FC<Props> = ({ users, onDelete, onEdit }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingUserId, setEditingUserId] = useState<string | null>(null)

  const editingUser = editingUserId
    ? users.find((user) => user.id === editingUserId)
    : null

  const handleEdit = (userId: string) => {
    setEditingUserId(userId)
    setIsModalVisible(true)
  }

  const handleModalOk = (updatedUser: User) => {
    if (editingUserId) {
      onEdit(editingUserId, updatedUser)
    }
    setIsModalVisible(false)
    setEditingUserId(null)
  }

  const handleModalCancel = () => {
    setIsModalVisible(false)
    setEditingUserId(null)
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
      render: (_: any, record: User) => (
        <span>
          <Button onClick={() => handleEdit(record.id)}>Edit</Button>
          <Button
            onClick={() => onDelete(record.id)}
            style={{ marginLeft: "10px" }}
          >
            Delete
          </Button>
        </span>
      ),
    },
  ]

  return (
    <div>
      <Table dataSource={users} columns={columns} rowKey='id' />
      <Modal
        title='Edit User'
        open={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        {editingUser && (
          <UserForm userData={editingUser} onSubmit={handleModalOk} />
        )}
      </Modal>
    </div>
  )
}

export default UserList
