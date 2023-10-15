// src/components/Users/index.tsx

import React, { useState } from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"
import UserSearch from "./UserSearch"
import { User } from "./types"
import { Space, Button } from "antd"

const Users: React.FC = () => {
  const initialUsers: User[] = [
    { id: "1", name: "Jerry", age: 30, gender: "male" },
    { id: "2", name: "Tom", age: 25, gender: "female" },
    { id: "3", name: "Nancy", age: 25, gender: "female" },
    { id: "4", name: "HLB", age: 25, gender: "female" },
    { id: "5", name: "XZY", age: 25, gender: "female" },
    { id: "6", name: "GY", age: 25, gender: "female" },
    { id: "7", name: "HWB", age: 25, gender: "female" },
    { id: "8", name: "HBB", age: 25, gender: "female" },
    { id: "9", name: "HDB", age: 25, gender: "female" },
  ]

  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchid, setSearchId] = useState<string>("")

  const handleAddUser = (user: User) => {
    const newId = (users.length + 1).toString()
    const newUser = {
      ...user,
      id: newId,
    }
    setUsers((prevUsers) => [...prevUsers, newUser])
  }

  const handleDeleteUser = (userId: string) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId))
  }

  const handleEditUser = (userId: string, updatedUser: User) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers]
      const userIndex = updatedUsers.findIndex((user) => user.id === userId)
      updatedUsers[userIndex] = updatedUser
      return updatedUsers
    })
  }

  const handleSearch = (id: string) => {
    setSearchId(id)
  }

  const clearSearch = () => {
    setSearchId("")
  }

  const filteredUsers = searchid
    ? users.filter((user) => user.id === searchid)
    : users

  return (
    <div>
      <h1>用户管理</h1>
      <Space direction='vertical' size={"small"}>
        <div>
          <UserSearch onSearch={handleSearch} />
          {searchid && (
            <Button onClick={clearSearch} style={{ marginLeft: "10px" }}>
              清除搜索
            </Button>
          )}
        </div>
        <UserForm onSubmit={handleAddUser} />
        <UserList
          users={filteredUsers}
          onDelete={handleDeleteUser}
          onEdit={handleEditUser}
        />
      </Space>
    </div>
  )
}

export default Users
