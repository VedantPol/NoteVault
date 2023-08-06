import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main className="main">
      <Container>
        <Row>
          <Routes>
            <Route path="/" Component={LandingPage} exact />
            <Route path="/login" Component={LoginPage} exact />
            <Route path="/register" Component={RegisterPage} exact />
            <Route path="/mynotes" Component={() => <MyNotes />} />
          </Routes>
        </Row>
      </Container>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
