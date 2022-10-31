import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../../../app/hooks'
import { selectUser } from '../../../../../features/user/userSlice'

const useLoginForm = () => {
    const dispatch = useAppDispatch()
    const userModel = useAppSelector(selectUser)
    const loading = userModel.loading
    const onLogin = (credential: any) => {
        dispatch({type: "user/loginWithCredential", payload: credential})
    }
  return {
    onLogin,
    loading
  }
}

export default useLoginForm