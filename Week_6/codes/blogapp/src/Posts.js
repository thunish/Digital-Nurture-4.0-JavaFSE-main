import React from 'react';
import Post from './Post';

class Posts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        posts: [],
        error: null
        };
    }

    loadPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
            const postList = data.slice(0, 5).map(
                (item) => new Post(item.id, item.title, item.body)
            );
            this.setState({ posts: postList });
            })
            .catch((err) => this.setState({ error: err.message }));
    }
    
    componentDidMount() {
        this.loadPosts();
    }

    render() {
        const { posts, error } = this.state;

        if (error) {
        return <h3>Error: {error}</h3>;
        }

        return (
        <div>
            <h2>Blog Posts</h2>
            {posts.map((post) => (
            <div key={post.id}>
                <h4>{post.title}</h4>
                <p>{post.body}</p>
            </div>
            ))}
        </div>
        );
    }

    componentDidCatch(error, info) {
        alert("An error occurred: " + error);
    }
}

export default Posts;




