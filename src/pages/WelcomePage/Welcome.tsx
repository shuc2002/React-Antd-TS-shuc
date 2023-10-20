import React from "react"
import {
  Carousel,
  Card,
  Tag,
  Timeline,
  Statistic,
  Row,
  Col,
  Button,
  Divider,
} from "antd"
import { SmileOutlined, ClockCircleOutlined } from "@ant-design/icons"

const Welcome: React.FC = () => {
  const timelineItems = [
    {
      color: "green",
      label: "Phase 1",
      children: "Dashboard: 展示简单的统计数据和功能概述。",
    },
    {
      color: "blue",
      label: "Phase 2",
      children:
        "User Management: 用户需要先注册登录，然后才能进行进一步的操作。",
    },
    {
      color: "red",
      label: "Phase 3",
      children:
        "Data Integration: 集成了各种用户数据，例如注册信息、活动历史等。",
    },
    {
      label: "Phase 4",
      children: "Visualization: Charts页面提供了一系列的数据可视化工具和图表。",
    },
  ]
  return (
    <div style={{ padding: "24px" }}>
      <Row gutter={16}>
        <Col span={12}>
          <Carousel autoplay>
            <div>
              <h3>Welcome to shuc's Platform</h3>
            </div>
            <div>
              <h3>Enjoy Premium Features</h3>
              <SmileOutlined />
            </div>
            <div>
              <h3>HAHAHAHAHAHAH</h3>
            </div>
          </Carousel>
        </Col>
        <Col span={12}>
          <Card title='项目功能' bordered={false}>
            <Timeline mode='left' items={timelineItems} />
          </Card>
        </Col>
      </Row>

      <Divider orientation='left'>Quick Stats</Divider>

      <Row gutter={16}>
        <Col span={8}>
          <Statistic title='Active Users' value={112893} />
        </Col>
        <Col span={8}>
          <Statistic title='Tasks Completed' value={1128} suffix='/ 2000' />
        </Col>
        <Col span={8}>
          <Statistic title='Total Posts' value={93} />
        </Col>
      </Row>

      <Divider orientation='left'>Tags</Divider>

      <div>
        <Tag color='magenta'>WWWWW</Tag>
        <Tag color='red'>red</Tag>
        <Tag color='volcano'>HAHA</Tag>
        <Tag color='orange'>orange</Tag>
      </div>

      <Divider orientation='left'>Actions</Divider>

      <div>
        <Button type='primary' icon={<SmileOutlined />}>
          Start a New Journey
        </Button>
        <Button style={{ marginLeft: "16px" }} icon={<ClockCircleOutlined />}>
          View History
        </Button>
      </div>
    </div>
  )
}

export default Welcome
