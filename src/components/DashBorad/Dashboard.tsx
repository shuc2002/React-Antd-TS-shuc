import React from 'react';
import { Card, Statistic } from 'antd';

const Dashboard: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Card>
        <Statistic title="Active Users" value={112893} />
      </Card>
      <Card>
        <Statistic title="New Posts" value={1128} />
      </Card>
      <Card>
        <Statistic title="Feedbacks" value={893} />
      </Card>
    </div>
  );
}

export default Dashboard;
