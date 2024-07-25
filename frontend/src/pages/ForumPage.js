import React, {useEffect, useState} from "react";
import Navigation from "../components/navigation/Navigation";
import Forum from "../components/Forum";
import usePostsAndLink from "../hooks/usePostsAndLink";
import Spinner from "react-bootstrap/Spinner";
import SidebarMaterials from "../components/sidebar-comp/SidebarMaterials";

const ForumPage = () => {

    const {activeLink, posts, fetchData} = usePostsAndLink();
    const subjectId =  window.location.pathname.substring(1).split("/").at(2);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData(subjectId)
        if (posts) {
            setIsLoading(false);
        }
    }, [])

    if(isLoading) {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh"
            }}>
                <Spinner animation="border" />
            </div>
        );
    }
    return (
        <>
            <div style={{ backgroundColor: '#DBD2CB' }}>
                <Navigation
                    isNavigationWhite={false}
                />
            </div>
            <div style={{display: 'flex', minHeight: "100vh"}}>
               <SidebarMaterials/>
                <Forum
                    subjectUrl = {subjectId}
                    posts={posts} subjectId={activeLink}></Forum>
            </div>
        </>
    );
}

export default ForumPage;