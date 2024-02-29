import React from 'react';
import Post from "./Post";
import AddPostModal from "./AddPostModal";

const Forum = ({ posts, subjectId }) => {

    return (
        <div className="container">
            <h1 className="text-center mb-4">Forum</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <AddPostModal subjectId={subjectId}></AddPostModal>
            </div>
            {Object.entries(posts).map(([postId, post]) => (
                <Post key={postId} post={post}></Post>
            ))}

        </div>
    );
};

export default Forum;

