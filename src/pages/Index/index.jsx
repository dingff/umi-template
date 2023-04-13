import { Button } from 'antd'
import { useState } from 'react'

export default function Index() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <div>你点击了{count}次</div>

      <Button onClick={() => setCount(count + 1)}>点击</Button>
    </div>
  )
}
