import React from 'react';
import AllPosts from '../containers/AllPosts';
import CreatePost from '../containers/CreatePost';
import {   BrowserRouter as Router 
} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <AllPosts />
      <CreatePost />
    </Router>

  );
}
