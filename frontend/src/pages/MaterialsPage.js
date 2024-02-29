import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import React, {useEffect, useState} from "react";
import "./SelectPage.module.css";
import useTakenSubjects from "../hooks/useTakenSubjects"

function MaterialsPage() {

    const subjects = useTakenSubjects();

    return (
        <div className="App">
            <NavigationBar></NavigationBar>
            <Sidebar subjects={subjects}></Sidebar>
        </div>
    );
}

export default MaterialsPage;