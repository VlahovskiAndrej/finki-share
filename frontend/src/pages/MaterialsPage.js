import '../App.css';
import SidebarMaterials from "../components/sidebar-comp/SidebarMaterials";
import React from "react";
import useTakenSubjects from "../hooks/useTakenSubjects"
import Navigation from "../components/navigation/Navigation";

const MaterialsPage = () => {

    const subjects = useTakenSubjects();

    return (
        <div className="App">
            <Navigation></Navigation>
            <SidebarMaterials subjects={subjects}></SidebarMaterials>
        </div>
    );
}

export default MaterialsPage;