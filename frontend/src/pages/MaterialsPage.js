import '../App.css';
import React from "react";
import useTakenSubjects from "../hooks/useTakenSubjects"
import Navigation from "../components/navigation/Navigation";
import {Menu, MenuItem, Sidebar, SubMenu} from "react-pro-sidebar";

const MaterialsPage = () => {

    const subjects = useTakenSubjects();
    const redirectLink = `/materials/forum/`

    const handleClick = (subject) => {
       window.location.href = `${redirectLink}${subject.id}`;
    }
    return (
        <>
            <Navigation isNavigationWhite={true}/>
            <div style={{display: 'flex', minHeight: "100vh", textAlign: "center"}}>
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
                <h1>Welcome</h1>
            </div>
        </>
    );
}

export default MaterialsPage;