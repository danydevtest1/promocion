import React from 'react'

export function AdminLayouts({children}) {
  return (
    <div className='admin-layout'>
        <div className='admin-layout__header'>
            Header
        </div>
        {children}
    </div>
  )
}
