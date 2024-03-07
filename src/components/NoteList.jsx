import Note from "./Note";
import { useEffect } from "react";
import axios from "axios";

const NoteList = ({ notes, setNotes, toggleImportance }) => {
  useEffect(() => {
    axios
      .get("http://localhost:3001/notes")
      .then((response) => setNotes(response.data))
      .catch((error) => console.log(error));
  }, [setNotes]);

  return (
    <>
      <ul>
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={toggleImportance}
            setNotes={setNotes}
            notes={notes}
          />
        ))}
      </ul>
    </>
  );
};

export default NoteList;
