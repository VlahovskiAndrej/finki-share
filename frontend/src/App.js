import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CardComponent from "./components/CardComponent";
import {Col, Row} from "react-bootstrap";
import SelectPage from "./pages/SelectPage";
import MaterialsPage from "./pages/MaterialsPage";

function App() {
  return (

    <div className="Main">

    {/*    <NavigationBar></NavigationBar>*/}
    {/*    <Home></Home>*/}
    {/*    <Sidebar></Sidebar>*/}
    {/*    <div className="container">*/}
    {/*        <h2>Семестар 1</h2>*/}
    {/*        <Row>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Компјутерски мрежи"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*        </Row><br/>*/}
    {/*        <Row>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*        </Row><hr/>*/}
    {/*        <h2>Семестар 2</h2>*/}
    {/*        <Row>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*        </Row><br/>*/}
    {/*        <Row>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*            <Col><CardComponent title={"Напреден веб дизајн"}></CardComponent></Col>*/}
    {/*        </Row>*/}

    {/*    </div>*/}

    {/*</div>*/}




        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/select" element={<SelectPage />} />
                <Route path="/materials" element={<MaterialsPage />} />
                {/* Other routes */}
            </Routes>
        </Router>
    </div>
  );
}

export default App;
