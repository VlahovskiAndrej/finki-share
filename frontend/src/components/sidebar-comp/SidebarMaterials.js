import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import React from "react";
import useTakenSubjects from "../../hooks/useTakenSubjects";

const SidebarMaterials = () => {
    const subjects = useTakenSubjects();
    const redirectLink = `/materials/forum/`

    const handleClick = (subject) => {
        window.location.href = `${redirectLink}${subject.id}`;
    }

    return (
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
    );
}

export default SidebarMaterials;