import React, {useEffect} from "react";
import Navigation from "../components/navigation/Navigation";
import Forum from "../components/forum/Forum";
import usePostsAndLink from "../hooks/usePostsAndLink";
import SidebarMaterials from "../components/sidebar/SidebarMaterials";
import {urlParams} from "../enum/url"


const ForumPage = () => {

    const {activeLink, posts, fetchData} = usePostsAndLink();
    const subjectId =  window.location.pathname.substring(1).split("/").at(urlParams.SUBJECT_ID);

    useEffect(() => {
        fetchData(subjectId)
    }, [])

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