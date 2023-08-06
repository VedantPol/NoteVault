import React, { useEffect, useState } from "react";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import axios from "axios";

const MyNotes = () => {
  const[notes,setNotes] = useState([]);

  const deleteHandler = (id) =>{
    if(window.confirm("Are you sure")){}
  };
  const fetchNotes=async() => {
    const {data} = await axios.get("/api/notes")
    setNotes(data)
  }
  useEffect(()=>{
    fetchNotes();
  },[])
  return (
    <MainScreen title="Welcome Back Vedant Pol..">
      <Link to="createnote">
        <Button style={{ marginLeft: 10, marginBotteom: 6 }} size="lg">
          Create New Note
        </Button>
      </Link>
      {notes.map((note) => (
        <Accordion key={note._id}>
          <Accordion.Item eventKey="0">
            <Card style={{ margin: 10 }} key={note._id}>
              <Card.Header style={{ display: "flex" }}>
                <span
                  // onClick={() => ModelShow(note)}
                  style={{
                    color: "black",
                    textDecoration: "none",
                    flex: 1,
                    cursor: "pointer",
                    alignSelf: "center",
                    fontSize: 18,
                  }}
                >
                  <Accordion.Header as={Card.Text} variant="link" eventKey="0">
                    {note.title}
                  </Accordion.Header>
                </span>

                <div>
                  <Button href={`/note/${note._id}`}>Edit</Button>
                  <Button
                    variant="danger"
                    className="mx-2"
                    onClick={() => deleteHandler(note._id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card.Header>
              <Accordion.Body eventKey="0">
                <Card.Body>
                  <h4>
                    <Badge variant="success">Category - {note.category}</Badge>
                  </h4>
                  <blockquote className="blockquote mb-0">
                    <ReactMarkdown>{note.content}</ReactMarkdown>
                    <footer className="blockquote-footer">Created on -</footer>
                  </blockquote>
                </Card.Body>
              </Accordion.Body>
            </Card>
          </Accordion.Item>
        </Accordion>
      ))}
      
    </MainScreen>
  );
};

export default MyNotes;
