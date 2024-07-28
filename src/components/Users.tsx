import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [ searchParams, setSearchParams ] = useSearchParams();
  return (
    <div>
      <h1>Users</h1>

      <Outlet />

      <div style={{display: 'flex', gap: '10px'}}>
        <button onClick={() => setSearchParams({admin: 'true'})}>Active Filter</button>
        <button onClick={() => setSearchParams({})}>Clear Filter</button>
      
              <span>params: { searchParams.get('admin') }</span>
          </div>
    </div>
  );
}

export default Users