import { FilterFilled } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'

const Filter = () => {
  return (
    <div className='filter-button'>
        <Button size='large' ghost type='primary'><FilterFilled/> Filter</Button>
    </div>
  )
}

export default Filter