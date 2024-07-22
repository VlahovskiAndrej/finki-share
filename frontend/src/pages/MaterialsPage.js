import '../App.css';
import React from "react";
import useTakenSubjects from "../hooks/useTakenSubjects"
import Navigation from "../components/navigation/Navigation";
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import Forum from "../components/Forum";
import usePostsAndLink from "../hooks/usePostsAndLink";

const MaterialsPage = () => {

    const subjects = useTakenSubjects();
    const {activeLink, posts, fetchData} = usePostsAndLink();

    return (
        <div className="App">
            <Navigation isNavigationWhite={true}/>
            <div style={{display: 'flex', minHeight: "100vh"}}>
                <Sidebar>
                    <Menu style={{backgroundColor: '#CDC1B6', minHeight: "100vh"}}>
                        {Object.values(subjects).map((subject) => {
                            return (
                                <SubMenu label={subject.name}>
                                    <MenuItem style={{backgroundColor: '#DBD2CB'}}>Материјали</MenuItem>
                                    <MenuItem style={{backgroundColor: '#DBD2CB'}} onClick={() => fetchData(subject.id)}>
                                        Форум
                                    </MenuItem>
                                </SubMenu>
                            );
                        })}
                    </Menu>
                </Sidebar>
                <Forum posts={posts} subjectId={activeLink}></Forum>
            </div>
        </div>
    );
}

export default MaterialsPage;