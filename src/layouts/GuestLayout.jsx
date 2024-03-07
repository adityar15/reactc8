import React from 'react'
import {Outlet, Link} from "react-router-dom"

export default function GuestLayout() {
  return (
    <>
     <header className="bg-gradient-to-r from-green-500 to-blue-500 h-20 w-full p-3 flex justify-between items-center">
            <div>
                <h1 className="text-2xl text-white">Logo</h1>
            </div>

            <ul className='flex items-center gap-2 text-white'>
                <li>
                    <Link to="/users">User List</Link>
                </li>
                <li>
                    <Link to="/posts">Post List</Link>
                </li>
                <li>
                    <Link to="/">Github Search</Link>
                </li>
                <li>
                    <Link to="/quiz">Quiz</Link>
                </li>
            </ul>
     </header>

     <Outlet />
    </>
  )
}
