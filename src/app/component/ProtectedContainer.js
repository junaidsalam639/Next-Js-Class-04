'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext'
const ProtectedContainer = ({children}) => {
    const { user } = useContext(AuthContext);
    const router = useRouter();
    useEffect(()=>{
        if(!user){
           router.push('/');
        }
       },[]);
       
  return (
    <div>
      {children}
    </div>
  )
}

export default ProtectedContainer
