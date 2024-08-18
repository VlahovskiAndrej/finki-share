import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MaterialsPage from "./pages/MaterialsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChooseSubject from "./pages/ChooseSubject";
import AllSubjects from "./pages/AllSubjects";
import RegisterPageMaterialUI from "./pages/RegisterPageMaterialUI";
import EarthAnimation from "./components/animation/earth/EarthAnimation";
import ComputerAnimation from "./components/animation/computer/ComputerAnimation";
import DeskAnimation from "./components/animation/desk/DeskAnimation"
import ForumPage from "./pages/ForumPage";
import LoginPageMaterialUI from "./pages/LoginPageMaterialUI";
import UploadMaterials from "./components/materials/UploadMaterials";
import AttachmentPage from "./pages/AttachmentPage";

function App() {

    return (
        <div className="Main">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/homepage" element={< HomePage/>}/>
                    <Route path="/materials" element={<MaterialsPage/>}/>
                    <Route path="/select" element={<ChooseSubject/>}/>
                    <Route path="/subjects" element={<AllSubjects/>}/>
                    <Route path="/login" element={<LoginPage/>}/>
                    <Route path="/register" element={<RegisterPage/>}/>
                    {/*TESTING PURPOSES*/}
                    <Route path="/registerUI" element={<RegisterPageMaterialUI/>}/>
                    <Route path="/loginUI" element={<LoginPageMaterialUI/>}></Route>
                    <Route path="/animationEarth" element={<EarthAnimation/>}/>
                    <Route path="/animationComputer" element={<ComputerAnimation/>}/>
                    <Route path="/animationDesk" element={<DeskAnimation/>}/>
                    <Route path={"/materials/forum/:id"} element={<ForumPage/>}/>
                    <Route path={"/materials/upload/:id"} element={<AttachmentPage/>}/>
                    <Route path={"/materials/upload"} element={<UploadMaterials/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;

