import React, { useEffect, useState } from 'react'

export default function SomeDetails() {
    const [details, setDetails] = useState([])
    const [page, setPage] = useState(0)

    function getDetails() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => setDetails(data))
    }

    useEffect(() => {
        getDetails()
    }, [page])

    

    return (
        <div>
            {details.length}
        </div>
    )
}
