import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./HomePage/HomePage";
import Posts from "./Posts/Posts";
import MyPosts from "./Posts/MyPosts";
import OtherPosts from "./Posts/OtherPosts";
import SinglePost from "./SinglePost/SinglePost";
import UserIdProvider from "./UserIdProvider";
import './index.css'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function App() {
  
  return (
    <>
    {/* we need to wrap whole thing in order to be able to access data from UserIdProvider */}
      <UserIdProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />}/>
              <Route path="/posts" element={<Posts/>}/>
              <Route path="/MyPosts" element={<MyPosts/>}/>
              <Route path="/OtherPosts" element={<OtherPosts/>}/>
              <Route path="/post/:postId" element={<SinglePost/>}/>
            </Routes>
          </Router>
        </QueryClientProvider>
      </UserIdProvider>
    </>
  )
}

export default App
