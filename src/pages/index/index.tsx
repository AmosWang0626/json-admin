import { useState } from 'react'
import { Typography, Button, Result } from 'antd';
const { Title } = Typography;

import '@/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Title type="success" level={2}>Hello World ! Count = {count}</Title>
      <Result
        status="success"
        title="React + TypeScript + Vite + Ant Design"
        subTitle="Amos Wang Study React."
        extra={[
          <Button type="primary" onClick={() => setCount((count) => count + 1)}>
            count ++
          </Button>,
          <Button type="primary" onClick={() => setCount((count) => count - 1)}>
            count --
          </Button>
        ]}
      />
    </>
  )
}

export default App
