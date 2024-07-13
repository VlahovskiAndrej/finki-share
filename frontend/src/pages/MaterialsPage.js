import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import React, {useEffect, useState} from "react";
import "./SelectPage.module.css";
import useTakenSubjects from "../hooks/useTakenSubjects"
import Navigation from "../componentsNew/Navigation/Navigation";

function MaterialsPage() {

    const subjects = useTakenSubjects();

    return (
        <div className="App">
            <Navigation></Navigation>
            <Sidebar subjects={subjects}></Sidebar>
        </div>
    );
}

export default MaterialsPage;