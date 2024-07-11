import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import Heading from './Heading'



function GithubDetails({ user }) {
    return (
        user?.message ? <p className='text-red-500'>User not found</p> :
            <div className='my-10'>

                <div className='flex items-center gap-4'>
                    <img src={user.avatar_url} className='rounded-full size-10 object-cover object-center' />

                    <div className='flex flex-col'>
                        <Heading content={user.name} />
                        <p>{user?.company}</p>
                    </div>
                </div>

                <div className='flex flex-col'>
                    <div className='flex items-center gap-2'>
                        <p className='font-bold'>Followers</p>
                        <p>{user.followers}</p>
                    </div>

                    <div className='flex items-center gap-2'>
                        <p className='font-bold'>Public repos</p>
                        <p>{user.public_repos}</p>
                    </div>
                </div>

            </div>
    )
}


export default function GithubSearch() {

    const [username, setUsername] = useState("")
    const [user, setUser] = useState(null)

    function findUser() {
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                setUser(data)
            })
    }

    return (
        <div>
            <div className="flex items-center">
                <Input type="search" onInput={(e) => setUsername(e.target.value)} className="flex-grow" placeholder="Enter your Github username" />

                <Button onClick={findUser}> Search </Button>
            </div>

            {user && <GithubDetails user={user} />}
        </div>
    )
}
