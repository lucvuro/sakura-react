import { Divider } from 'antd'
import React from 'react'
import './PopoverCard.scss'
const PopoverCard = (props: any) => {
  return (
    <div className='popover-card'>
        <div className='title'>
            <h2><b>{props.card.nameCard}</b></h2>
        </div>
        <Divider/>
        <div className='sign'>
            <b>Sign: </b>{props.card.sign}
        </div>
        <div className='magic-type'>
            <b>Magic Type: </b>{props.card.magicType}
        </div>
    </div>
  )
}

export default PopoverCard