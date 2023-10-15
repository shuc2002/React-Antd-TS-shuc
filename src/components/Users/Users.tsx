// src/components/Users/index.tsx

import React, { useState } from "react"
import UserForm from "./UserForm"
import UserList from "./UserList"
import UserSearch from "./UserSearch"

export type User = {
  name: string
  age: number
  gender: "male" | "female" | "other"
}

const Users: React.FC = () => {
  const initialUsers: User[] = [
    { name: "Jerry", age: 30, gender: "male" },
    { name: "Tom", age: 25, gender: "female" },
    { name: "Nancy", age: 25, gender: "female" },
    { name: "HWB", age: 25, gender: "female" },
    { name: "XZY", age: 25, gender: "female" },
    { name: "GY", age: 25, gender: "female" },
    { name: "HWB", age: 25, gender: "female" },
    { name: "HBB", age: 25, gender: "female" },
    { name: "HDB", age: 25, gender: "female" },
  ]

  const [users, setUsers] = useState<User[]>(initialUsers)
  const [searchName, setSearchName] = useState<string>("")

  const handleAddUser = (user: User) => {
    setUsers((prevUsers) => [...prevUsers, user])
  }

  const handleDeleteUser = (index: number) => {
    const newUsers = [...users]
    newUsers.splice(index, 1)
    setUsers(newUsers)
  }

  const handleEditUser = (index: number, updatedUser: User) => {
    const newUsers = [...users]
    newUsers[index] = updatedUser
    setUsers(newUsers)
  }

  const handleSearch = (name: string) => {
    setSearchName(name)
  }

  return (
    <div>
      <h1>用户管理</h1>
      <UserSearch onSearch={handleSearch} />
      <UserForm onSubmit={handleAddUser} />
      <UserList
        users={users}
        onDelete={handleDeleteUser}
        onEdit={handleEditUser}
      />
    </div>
  )
}

export default Users
