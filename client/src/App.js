import PredictionPage from "./components/PredictionPage/PredictionPage";
import NavBar from "./components/NavBar/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import styles from "./styles/app.module.css";

function App() {

  return (
      <div className={styles}>
          <BrowserRouter>
              <NavBar />
                  <Routes>
                      <Route exact path="/" element={<HomePage/>}/>
                      <Route exact path="/prediction" element={<PredictionPage/>}/>
                  </Routes>
              <Footer />
          </BrowserRouter>
      </div>
  );
}

export default App;
