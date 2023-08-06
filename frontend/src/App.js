import { Container, Row } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/MyNotes/SingleNote";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";

function App() {
  const [search,setSearch]= useState("");
  console.log(search)
  return (
    <BrowserRouter>
      <Header setSearch={(s) => setSearch(s)} />
      <main className="main">
        <Container>
          <Row>
            <Routes>
              <Route path="/" element={<LandingPage />} exact />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfileScreen />} />
              <Route path="/mynotes" element={<MyNotes search={search} />} />
              <Route path="/note/:id" element={<SingleNote />} />
              <Route path="/createnote" element={<CreateNote />} />
            </Routes>
          </Row>
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
