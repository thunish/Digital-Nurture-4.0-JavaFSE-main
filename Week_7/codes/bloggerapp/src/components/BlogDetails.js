import React from 'react';

function BlogDetails({ blogs }) {
  return (
    <div className="v1">
      <h1>Blog Details</h1>
      <ul>
        {blogs.map((blog, index) => (
          <div key={index}>
            <h3>{blog.title}</h3>
            <strong>{blog.author}</strong>
            <p>{blog.body}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
