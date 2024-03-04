import GithubSearch from "./pages/GithubSearch"
import GuestLayout from "./layouts/GuestLayout"
import { Routes, Route } from "react-router-dom"
import UserList from "./pages/UserList"
import PostList from "./pages/PostList"
import Post from "./pages/Post"
import NotFound from "./pages/NotFound"

// http://localhost:5173

function App() {
  
  return (

    <Routes>
      <Route path="/" element={<GuestLayout />}>
        <Route index element={<GithubSearch />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path="/posts" element={<PostList />}></Route>
        <Route path="/posts/:id" element={<Post />}></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

    
  )
}

export default App
