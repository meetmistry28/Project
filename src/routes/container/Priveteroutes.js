import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function Priveteroutes() {
    const auth = true;
  return (
    <div>
            {
                auth ? <Outlet /> : <Navigate to="/" replace/>
            }
        </div>

  )
}
