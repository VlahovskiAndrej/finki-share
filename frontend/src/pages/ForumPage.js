import React, {useEffect} from "react";
import useTakenSubjects from "../hooks/useTakenSubjects"
import Navigation from "../components/navigation/Navigation";
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import Forum from "../components/Forum";
import usePostsAndLink from "../hooks/usePostsAndLink";

const ForumPage = (effect, deps) => {

    const subjects = useTakenSubjects();
    const {activeLink, posts, fetchData} = usePostsAndLink();
    const redirectLink = `/materials/forum/`;
    const subjectId =  window.location.pathname.substring(1).split("/").at(2);

    useEffect(() => {
        fetchData(subjectId)
    }, [])

    const handleClick = (subject) => {
        window.location.href = `${redirectLink}${subject.id}`;
    }
    return (
        <>
            <Navigation isNavigationWhite={true}/>
            <div style={{display: 'flex', minHeight: "100vh"}}>
                <Sidebar>
                    <Menu style={{backgroundColor: '#CDC1B6', minHeight: "100vh"}}>
                        {Object.values(subjects).map((subject) => {
                            return (
                                <SubMenu label={subject.name}>
                                    <MenuItem style={{backgroundColor: '#DBD2CB'}}>Материјали</MenuItem>
                                    <MenuItem style={{backgroundColor: '#DBD2CB'}} onClick={() => handleClick(subject)}>
                                        Форум
                                    </MenuItem>
                                </SubMenu>
                            );
                        })}
                    </Menu>
                </Sidebar>
                <Forum
                    subjectUrl = {subjectId}
                    posts={posts} subjectId={activeLink}></Forum>
            </div>
        </>
    );
}

export default ForumPage;