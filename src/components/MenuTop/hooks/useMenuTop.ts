import React from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks'

const useMenuTop = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onClickLogOut = async() => {
        dispatch({type: "user/logoutUser", payload: {navigate: navigate}})
    }
  return {
    onClickLogOut
  }
}

export default useMenuTop