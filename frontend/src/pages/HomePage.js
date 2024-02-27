import '../App.css';
import NavigationBar from "../components/NavigationBar";
import Home from "../components/Home";

function HomePage() {
    return (

        <div className="App">
            <NavigationBar></NavigationBar>
            <Home></Home>
        </div>
    );
}

export default HomePage;