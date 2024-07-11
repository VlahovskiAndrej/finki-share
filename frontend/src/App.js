import logo from './logo.svg';
import './App.css';
import NavigationBar from "./components/NavigationBar";
import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pagesNew/HomePage';
import CardComponent from "./components/CardComponent";
import {Col, Row} from "react-bootstrap";
import SelectPage from "./pages/SelectPage";
import MaterialsPage from "./pages/MaterialsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChooseSubject from "./pagesNew/ChooseSubject";
import AllSubjects from "./pagesNew/AllSubjects";


// function App() {
//   return (
//
//     <div className="Main">
//
//         <Router>
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/select" element={<SelectPage />} />
//                 <Route path="/materials" element={<MaterialsPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 {/* Other routes */}
//             </Routes>
//         </Router>
//     </div>
//   );
// }
//
// export default App;


function App() {
    return (

        <div className="Main">



            <Router>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    {/* <Route path="/select" element={<SelectPage />} /> */}
                    <Route path="/materials" element={<MaterialsPage />} />
                    {/*<Route path="/test" element={< TestPage/>} />*/}

                    <Route path="/homepage" element={< HomePage/>} />
                    <Route path="/select" element={<ChooseSubject />} />
                    <Route path="/select/subjectsAll" element={<AllSubjects />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                    {/* Other routes */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;

