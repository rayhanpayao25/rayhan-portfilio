import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function BlogPost() {

  return (
    <div>
      <h1>Blog Post</h1>
      <p>This is a placeholder for a blog post.</p>
    </div>
  );
}

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default Main;