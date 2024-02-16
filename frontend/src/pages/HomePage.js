// import logo from './logo.svg';
import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Sidebar from "../components/Sidebar";
import Home from "../components/Home";
import {Col, Row} from "react-bootstrap";
import CardComponent from "../components/CardComponent";
import NavigationAnimation from "../components/NavigationAnimation";

function HomePage() {
    return (

        <div className="App">
            <NavigationBar></NavigationBar>
            <Home></Home>
        </div>
    );
}

export default HomePage;