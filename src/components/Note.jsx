const Note = ({ note, toggleImportance }) => {
  const label = note.important ? " important" : "not important";

  return (
    <li>
      {note.content}{" "}
      <button onClick={() => toggleImportance(note.id)}>{label}</button>
    </li>
  );
};

export default Note;
