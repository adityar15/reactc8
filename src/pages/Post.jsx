import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
// {
//     id: 4
// }
export default function Post() {
    const [post, setpost] = useState([])
    const { id } = useParams()

    function getPosts(postId) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setpost(data))
    }

    useEffect(() => {
        getPosts(id)
    }, [])

    return (
        <>
            <h1 className="text-4xl">
                {post.title}
            </h1>
            <p className="mt-10">{post.body}</p>
        </>
    )
}