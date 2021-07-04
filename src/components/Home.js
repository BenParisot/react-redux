import React from 'react';
import CreatePost from '../containers/CreatePost';
import AllPosts from '../containers/AllPosts';
// import styles from '../styles.css';

export default function Home() {
  return (
        <>
        <section>
          <h2>Posts</h2>
          <AllPosts />
        </section>
        <section>
          <h2>Write a Post</h2>
          <CreatePost />
        </section>
        </>
  );
}
