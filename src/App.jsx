import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddNote = () => {
    if (!input.trim()) return;

    if (editId) {
      setNotes(notes.map(n => n.id === editId ? { ...n, text: input } : n));
      setEditId(null);
    } else {
      setNotes([...notes, { id: Date.now(), text: input }]);
    }
    setInput("");
  };

  const handleEdit = (id) => {
    const noteToEdit = notes.find(n => n.id === id);
    setInput(noteToEdit.text);
    setEditId(id);
  };

  const handleDelete = (id) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  
  const handleDeleteAll = () => {
    setNotes([]);
    setEditId(null);
    setInput("");
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Typography variant="h4" align="center" gutterBottom>
         My Notes App
      </Typography>

      <NoteForm
        input={input}
        setInput={setInput}
        handleAddNote={handleAddNote}
        handleDeleteAll={handleDeleteAll}  
        editId={editId}
        notes={notes}
      />

      <NoteList
        notes={notes}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </Container>
  );
}

export default App;





