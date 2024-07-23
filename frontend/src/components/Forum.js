import React, {useEffect, useState} from 'react';
import Post from "./Post";
import AddPostModal from "./AddPostModal";
import useGetSubject from "../hooks/useGetSubject";
import Spinner from 'react-bootstrap/Spinner';

const Forum = ({ posts, subjectId, subjectUrl }) => {

    const  {subject, fetchSubject} = useGetSubject();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchSubject(subjectUrl)
        if (!subject) {
            setIsLoading(false);
        }
        // const timer = setTimeout(() => {
        //     setIsLoading(false);
        // }, 1000);
        //
        // return () => clearTimeout(timer);
    }, [])


    if (isLoading || !subject) {
        return (
            <div style={{margin: "auto"}}>
                <Spinner animation="border" />
            </div>
        );
    }

    console.log(subject)
    return (
        <div className="container" style={{backgroundColor: '#DBD2CB'}}>
            <h1 className="text-center mb-2 mt-3">Форум за „{subject.name}“</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <AddPostModal subjectId={subjectId}></AddPostModal>
            </div>
            {Object.entries(posts).length !== 0 ? Object.entries(posts).map(([postId, post]) => (
                <Post key={postId} post={post}></Post>
            )) : <h1>Nothing has been posted :(</h1>}
        </div>
    );
};

export default Forum;

