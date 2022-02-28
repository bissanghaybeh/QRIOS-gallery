import './App.scss';
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main-container">
        <Header/>
        <Gallery/>
        <footer className="footer">
            <span> ©{(new Date().getFullYear())} The Gallery all rights reserved </span>
        </footer>
    </div>
  );
}

export default App;
