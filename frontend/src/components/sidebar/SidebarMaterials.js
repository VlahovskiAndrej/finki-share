import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";
import React from "react";
import useTakenSubjects from "../../hooks/useTakenSubjects";
import classes from "./Sidebar.module.css"

const SidebarMaterials = () => {
    const subjects = useTakenSubjects();
    const redirectLink = `/materials/forum/`

    const handleClick = (subject) => {
        window.location.href = `${redirectLink}${subject.id}`;
    }

    return (
        <Sidebar>
            <Menu className={classes.sidebar}>
                {Object.values(subjects).map((subject) => {
                    return (
                        <SubMenu label={subject.name}>
                            <MenuItem className={classes.menuItem}>Материјали</MenuItem>
                            <MenuItem className={classes.menuItem} onClick={() => handleClick(subject)}>
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