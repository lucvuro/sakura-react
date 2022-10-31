import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { selectUser, setCurrentUser } from '../features/user/userSlice'
import { auth } from '../firebase'
const useAuthenication = () => {
    const dispatch = useAppDispatch()
    const userModel = useAppSelector(selectUser)
    const currentUser = userModel.currentUser
    /**
     * useEffect này dùng để xem trạng thái đăng nhập hiện tại của user
     * nếu có user đang đăng nhập sẽ set user đó vào redux và set refrest token vào sessionstore
     * nếu không sẽ set null
     * Nếu component unmount sẽ chạy unsub để không track theo hàm nữa
     */
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(setCurrentUser(user.providerData[0]))
                sessionStorage.setItem("refreshToken", user.refreshToken)
            }else{
                dispatch(setCurrentUser(null))
            }
        })
        return () => unsub()
    }, [dispatch])
  return {
    currentUser
  }
}

export default useAuthenication