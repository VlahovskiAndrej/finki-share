import React from 'react';
import Post from "./Post";
import AddPostModal from "./AddPostModal";

const Forum = ({ posts }) => {

    return (
        <div className="container">
            <h1 className="text-center mb-4">Forum</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <AddPostModal></AddPostModal>
            </div>
            {Object.entries(posts).map(([postId, post]) => (
                <Post key={postId} post={post}></Post>
            ))}

        </div>
    );
};

export default Forum;


// <div key={postId} className="card mb-3">
//     <div className="card-body">
//         <h2 className="card-title">{post.title}</h2>
//         <p className="card-text">{post.description}</p>
//         <p className="card-text"><small className="text-muted">Posted: {post.timeStamp}</small></p>
//     </div>
// </div>
