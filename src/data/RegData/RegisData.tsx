import { useContext } from "react"
import { UserContext } from "../../context/context/UserContext"
import { Card, Row, Col, Typography } from "antd"

const { Title } = Typography

function RegisData() {
  const { users } = useContext(UserContext)

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      }}
    >
      <Title level={4}>User Details</Title>
      <Row gutter={[16, 16]} style={{ width: "100%" }}>
        {users.map((user, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              title='User Info'
              bordered={true}
              style={{ marginBottom: "20px" }}
            >
              <p>
                <strong>Username:</strong> {user.username}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Password</strong> {user.password}
              </p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default RegisData
