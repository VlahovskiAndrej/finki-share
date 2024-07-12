import '../App.css';
import Sidebar from "../components/Sidebar";
import React from "react";
import useTakenSubjects from "../hooks/useTakenSubjects"
import Navigation from "../components/navigation/Navigation";

const MaterialsPage = () => {

    const subjects = useTakenSubjects();

    return (
        <div className="App">
            <Navigation></Navigation>
            <Sidebar subjects={subjects}></Sidebar>
        </div>
    );
}

export default MaterialsPage;