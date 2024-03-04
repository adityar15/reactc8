import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"


export default function PostList() {
    const [posts, setposts] = useState([])

    function getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts/').then(res => res.json())
            .then(data => setposts(data))
    }

    useEffect(() => {
        getPosts()
    }, [])

    return (
        <ul className='space-y-3 max-w-4xl mx-auto my-10 flex flex-col'>
            {
                posts.map((post) =>
                    <li key={post.id} className="p-2 border border-gray-400">
                        <Link to={`/posts/${post.id}`}>
                            <span>Title: {post.title}</span>
                            <span> <br />Body: {post.body}</span>
                        </Link>
                    </li>)
            }
        </ul>
    )
}