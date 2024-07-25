import React from "react";
import CommentsModal from "./CommentsModal";

const Post = ({ post }) => {
    // Define a variable to hold the image URL
    const imageUrl = "https://cdn3d.iconscout.com/3d/premium/thumb/man-5692600-4743369.png?f=webp"; // Assuming imageUrl is a property of the post object

    return (
        <div className="card mb-3">
            <div className="card-body">
                <div style={{ display: "flex", alignItems: "center" }}>
                    {imageUrl ? ( // Render the image if imageUrl exists
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "30px" }}>
                            <img
                                src={imageUrl}
                                alt="Profile"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    borderRadius: "50%",
                                    border: "1px solid lightgray"
                                }}
                            />
                            {/* Add name below the picture */}
                            <p className="card-text">@andrejvlahovski</p>
                        </div>
                    ) : (
                        // If no imageUrl, render a red circle
                        <div
                            style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "50%",
                                backgroundColor: "red",
                                marginRight: "40px" // Add margin for spacing
                            }}
                        />
                    )}
                    <div>
                        <h2 className="card-title">{post.title}</h2>
                        <p className="card-text">{post.description}</p>
                        <p className="card-text">
                            <small className="text-muted">Posted: {post.timeStamp}</small>
                        </p>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-start"}}>
                <CommentsModal postId={post.id}></CommentsModal>
            </div>
        </div>
    );
}

export default Post;