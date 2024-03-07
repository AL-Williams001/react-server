import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import axios from "axios";

const NoteBook = () => {
  const [notes, setNotes] = useState([]);

  const toggleImportance = (id) => {
    const note = notes.find((note) => note.id === id);
    const changedNote = { ...note, important: !note.important };

    axios
      .put(`http://localhost:3001/notes/${id}`, changedNote)
      .then((response) => {
        setNotes(notes.map((note) => (note.id !== id ? note : response.data)));
      });
  };

  return (
    <>
      <h1>Notes</h1>
      <NoteList
        notes={notes}
        setNotes={setNotes}
        toggleImportance={toggleImportance}
      />{" "}
      /
      <NoteForm notes={notes} setNotes={setNotes} />
    </>
  );
};

export default NoteBook;
