import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Forum from "../Forum"; // Import CSS file for custom styling
import usePostsAndLink from "../../hooks/usePostsAndLink"
import {Menu, MenuItem, Sidebar, SubMenu} from 'react-pro-sidebar';

const SidebarMaterials = ({subjects}) => {
    const {activeLink, posts, fetchData} = usePostsAndLink();

    return (
        <>
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
        </>
    );
}

export default SidebarMaterials;
